package main

import (
	"crypto/ecdsa"
	"crypto/rand"
	"fmt"
	"github.com/celo-org/celo-blockchain/crypto"
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

func keyFromString() (*ecdsa.PrivateKey, error) {
	pk, err := ethcrypto.HexToECDSA("cfb12303a19cde580bb4dd771639b0d26bc68353645571a8cff516ab2ee113a0")
	if err != nil {
		fmt.Printf("%v", err)
		return nil, err
	}
	return pk, err
}

//go build -race -gcflags="all=-N -l" --ldflags '-extldflags "-Wl,--allow-multiple-definition"'
func main() {
	pk, err := keyFromString()
	if err != nil {
		fmt.Printf("%v", err)
		return
	}
	writeGuardianKey(pk, "", "bridge.key", false)

	fmt.Printf("bridge.key: %x\n", crypto.FromECDSA(pk))
	pk, err = ecdsa.GenerateKey(ethcrypto.S256(), rand.Reader)

	if err != nil {
		fmt.Printf("%v", err)
		return
	}
	writeGuardianKey(pk, "", "bridge_1.key", false)

	fmt.Printf("bridge_1.key: %x\n", crypto.FromECDSA(pk))
}
