package main

import (
	"fmt"
	"github.com/mr-tron/base58"
	"strings"
)

func base58ToHex(src string) {
	data, _ := base58.Decode(src)
	fmt.Printf("%s %0x\n", src,  data)
}

func ethAddressEmitter(src string) {
	str := strings.ToLower(strings.ReplaceAll(src, "0x", ""))
	for len(str) < 64 {
		str  = "0" + str
	}
	fmt.Printf("%s %s\n",src, str)
}

func main() {
	// solana
	fmt.Println("solana")
	base58ToHex("9YRLebhZ3ZCFqHjj4Afa89858yp1B1qCb26qc3BMDpNA")
	base58ToHex("GUL4iywHpuXR5YWeZnhwUL5StYyzKrb2sjLkSRh6U5We")
	base58ToHex("Cpa9E57wcoBaLjyTFoXxWrUob5kXW2WJpphVv7ciGBAn")

	// eth
	fmt.Println("eth")
	ethAddressEmitter("0xdF814331a20448F60dE16AA942d010C24022E43F")
	ethAddressEmitter("0x377743955cb199A0b03755d811dB8fe713a476f8")
	ethAddressEmitter("0x92E2d7b918636601B5eD93d19BA112154A91cc76")

	fmt.Println("bsc")
	ethAddressEmitter("0x9221EAb1e8d986CC9EE8a9F3EEAb2dF5c5a1DF91")
	ethAddressEmitter("0xE2D45923A79D16D6920fF4f3e51e4794e2b579f6")
	ethAddressEmitter("0x369D52A7752fb2370793865517a0c637EA1267d8")

	// bas
	fmt.Println("bas")
	ethAddressEmitter("0x98fdd30102cB8Dc8d62dD66E88D66Bf1C43c5A50")
	ethAddressEmitter("0x42d81210CC5059d5Be68A3154E0DD5E58259176e")
	ethAddressEmitter("0x1c4377588B5960Ed29268a1BcB32F87D7Ff9CdE6")
}
