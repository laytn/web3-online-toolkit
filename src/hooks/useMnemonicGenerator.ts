import { MNEMONIC_LANGAGE, MNEMONIC_PATH } from "../stores/commonData";
import { generateMnemonic, mnemonicToSeed, wordlists } from "bip39"
import { useEffect, useState } from "react";

import Web3 from 'web3';
import crypto from 'crypto-browserify';
import { hdkey } from 'ethereumjs-wallet'
import useInfoStore from "../states/infoStore";

const useMnemonicGenerator = (digit: string, langage: string) => {
    const { chainName } = useInfoStore()
    const [mnemonic, setMnemonic] = useState<string>('');
    const [privateKey, setPrivateKey] = useState<string>('');
    const [publicKey, setPublicKey] = useState<string>('');
    const [address, setAddress] = useState<string>('');


    let len: number

    useEffect(() => {
        let coinPath: number = MNEMONIC_PATH[chainName.toUpperCase()];
        const generateMnemonicAndPrivateKey = () => {
            const rng = (size: number) => {
                return crypto.randomBytes(size);
            };
            switch (digit) {
                case '12':
                    len = 128
                    break;
                case '24':
                    len = 256
                    break;
                default:
                    len = 128;
            }
            const mnemonicValue = generateMnemonic(len, rng, langage === MNEMONIC_LANGAGE[0] ? wordlists.english : wordlists.korean);
            setMnemonic(mnemonicValue);

            mnemonicToSeed(mnemonicValue, "ian-dev").then(seed => {
                const masterKey = hdkey.fromMasterSeed(seed);
                const path = `m/44'/${coinPath}'/0'/0/0`;
                const wallet = masterKey.derivePath(path).getWallet();
                setAddress(Web3.utils.toChecksumAddress(wallet.getAddressString()))
                setPrivateKey(wallet.getPrivateKeyString());
                setPublicKey(wallet.getPublicKeyString());
            }).catch(err => {
                console.error('Error generating private key:', err);
            });

        }
        generateMnemonicAndPrivateKey()

    }, [digit, langage, chainName]);

    return { mnemonic, publicKey, privateKey, address };
};

export default useMnemonicGenerator