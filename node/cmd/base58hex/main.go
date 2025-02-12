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
	base58ToHex("8kCgfjgBMLrX7mgyJDiLJEYtGctoMwEGZyc9pEPsPTkv")
	base58ToHex("VwtKPYBcPnSakZ6VyL31TTaSa2NmZnoKydeDpayZ74j")
	base58ToHex("4NfFQwR157w1gL1KsFobLHFXoJifHbTwjkBSCgGWmmvm")

	// eth
	fmt.Println("eth")
	ethAddressEmitter("0x6A1f2c5566Fb8BBbDffb1D05c2800971CF5996E9")
	ethAddressEmitter("0xCC540c29b3Eb8D842a7a5E86699008586d929363")
	ethAddressEmitter("0x0Da20180766d5D202A67e75032C73a6Be79e5E45")

	fmt.Println("bsc")
	ethAddressEmitter("0x2E686d5276008EEc8Fc1aeEbA9c04D3CF169Ab71")
	ethAddressEmitter("0x98fdd30102cB8Dc8d62dD66E88D66Bf1C43c5A50")
	ethAddressEmitter("0xa1331Ea07EB4C2cCe443a7576504CE93BB5b1B0F")

	// bas
	fmt.Println("bas")
	ethAddressEmitter("0xfbb8225485064bd58Aec183C25D0e143f8ee1a80")
	ethAddressEmitter("0x1479913FDb0E3173B768f386f860a2b2FF372F92")
	ethAddressEmitter("0x696edD7Dd1175915fBE3D2410B944aA915ef0F0A")

	// findora
	fmt.Println("findora")
	ethAddressEmitter("0x1fAbAf4F0386778b71B57C658460a4588b18D1C9")
	ethAddressEmitter("0xf9678A11BFe389Fc538b92EDDBE3e7FFc6B5159A")
	ethAddressEmitter("0x03d45a129c4D0768d453dB865287d84a7be2FAf8")

}
