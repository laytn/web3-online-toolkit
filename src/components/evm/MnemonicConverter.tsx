import { Box, Grid, Select, MenuItem, FormControl, InputLabel, SelectChangeEvent } from "@mui/material"
import Header from "../Header"
import { DIGIT, MNEMONIC_LANGAGE, MNEMONIC_PATH } from "../../stores/commonData"
import { useState } from "react"
import { generateMnemonic, mnemonicToSeed, wordlists } from "bip39"
import crypto from 'crypto-browserify';
import { hdkey } from 'ethereumjs-wallet'
import useInfoStore from "../../states/infoStore"

const MnemonicConverter = () => {
    const [langage, setLangage] = useState<string>(MNEMONIC_LANGAGE[0])
    const [digit, setDigit] = useState<string>(DIGIT[0])
    const [mnemonic, setMnemonic] = useState<string>()
    const [privateKey, setPrivateKey] = useState<string>()
    const { chainName } = useInfoStore();

    const handleLangageChange = (event: SelectChangeEvent<string>) => {
        setLangage(event.target.value);
    };
    const handleDigitChange = (event: SelectChangeEvent<string>) => {
        setDigit(event.target.value);
    };

    const onClickSubmit = () => {
        const rng = (size: number) => {
            return crypto.randomBytes(size);
        };
        let len;
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
        let coinPath: number = MNEMONIC_PATH[chainName.toUpperCase()];

        if (langage === MNEMONIC_LANGAGE[0]) {
            const mnemonic: string = generateMnemonic(len, rng, wordlists.english)
            setMnemonic(mnemonic)
            mnemonicToSeed(mnemonic, "ian-dev").then(seed => {
                const masterKey = hdkey.fromMasterSeed(seed);
                const path = `m/44'/${coinPath}'/0'/0/0`;
                const wallet = masterKey.derivePath(path).getWallet();
                setPrivateKey(wallet.getPrivateKeyString())
            })

        } else if (langage === MNEMONIC_LANGAGE[1]) {
            const mnemonic = generateMnemonic(len, rng, wordlists.korean)
            setMnemonic(mnemonic)
            mnemonicToSeed(mnemonic, "ian-dev").then(seed => {
                const masterKey = hdkey.fromMasterSeed(seed);
                const path = `m/44'/${coinPath}'/0'/0/0`;
                const wallet = masterKey.derivePath(path).getWallet();
                setPrivateKey(wallet.getPrivateKeyString())
            })
        }

    }

    return (
        <Grid>
            <Header />
            <Box sx={{ height: "100px", fontWeight: 700, fontSize: "30px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                MnemonicConverter
            </Box>
            <Grid sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", }}>
                <Grid sx={{ height: "100px", display: "flex", }}>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-standard-label">Langage</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={langage}
                                onChange={handleLangageChange}
                                label="langage"
                            >
                                {MNEMONIC_LANGAGE.map((func) => (
                                    <MenuItem key={func} value={func}>
                                        {func}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                    <Box sx={{ width: "50px" }} />
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-standard-label">Digit</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={digit}
                                onChange={handleDigitChange}
                                label="digit"
                            >
                                {DIGIT.map((func) => (
                                    <MenuItem key={func} value={func}>
                                        {func}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                    <Box sx={{ width: "100px" }} />
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <button className="btn btn-primary" onClick={onClickSubmit}>
                            submit
                        </button>
                    </Box>
                </Grid>
                <Box sx={{ height: "50px" }} />
                <Box sx={{ fontSize: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    mnemonic
                </Box>
                <Box sx={{ height: "100px", width: "500px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {mnemonic}
                </Box>
                <Box sx={{ fontSize: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    private key
                </Box>
                <Box sx={{ height: "100px", width: "500px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {privateKey}
                </Box>
            </Grid>
        </Grid >
    )

}

export default MnemonicConverter