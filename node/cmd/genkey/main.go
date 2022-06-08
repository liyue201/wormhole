package main

import (
	"crypto/ecdsa"
	"encoding/hex"
	"fmt"
	nodev1 "github.com/certusone/wormhole/node/pkg/proto/node/v1"
	ethcrypto "github.com/ethereum/go-ethereum/crypto"
	"golang.org/x/crypto/openpgp/armor" //nolint
	"google.golang.org/protobuf/proto"
	"os"
)

var keyDescription *string

const (
	GuardianKeyArmoredBlock = "WORMHOLE GUARDIAN PRIVATE KEY"
)

//-----BEGIN WORMHOLE GUARDIAN PRIVATE KEY-----
//PublicKey: 0xd176C887955F7ab9c8F7c19014Aa145fab2A0351
//
//CiC62/uJal/r7B806tmcenjXS3hEifB+5jFBrFLJ+/nJkQ==
//=4hQG
//-----END WORMHOLE GUARDIAN PRIVATE KEY-----

func writeGuardianKey(key *ecdsa.PrivateKey, description string, filename string, unsafe bool) error {

	m := &nodev1.GuardianKey{
		Data:                   ethcrypto.FromECDSA(key),
		UnsafeDeterministicKey: unsafe,
	}

	// The private key is a really long-lived piece of data, and we really want to use the stable binary
	// protobuf encoding with field tags to make sure that we can safely evolve it in the future.
	b, err := proto.Marshal(m)
	if err != nil {
		panic(err)
	}

	f, err := os.OpenFile(filename, os.O_RDWR|os.O_CREATE, 0600)
	if err != nil {
		return fmt.Errorf("failed to open file: %w", err)
	}

	headers := map[string]string{
		"PublicKey": ethcrypto.PubkeyToAddress(key.PublicKey).String(),
	}
	if description != "" {
		headers["Description"] = description
	}
	a, err := armor.Encode(f, GuardianKeyArmoredBlock, headers)
	if err != nil {
		panic(err)
	}
	_, err = a.Write(b)
	if err != nil {
		return fmt.Errorf("failed to write to file: %w", err)
	}
	err = a.Close()
	if err != nil {
		return err
	}
	return f.Close()
}


func main()  {
	data, err := hex.DecodeString("cfb12303a19cde580bb4dd771639b0d26bc68353645571a8cff516ab2ee113a0")
	if err != nil {
		fmt.Printf("%v", err)
		return
	}
	pk, err := ethcrypto.ToECDSA(data)
	if err != nil {
		fmt.Printf("%v", err)
		return
	}
	writeGuardianKey(pk, "" , "bridge.key", false)
}

