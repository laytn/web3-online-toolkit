import { Box, Grid, SelectChangeEvent } from "@mui/material"
import { DIGIT, MNEMONIC_LANGAGE } from "../../stores/commonData"
import React, { useState } from "react"

import Header from "../Header"
import SelectBox from "../SelectBox"
import SubTitle from "../vac/SubTitle"
import useMnemonicGenerator from "../../hooks/useMnemonicGenerator"

const centerFlex: React.CSSProperties = { display: "flex", alignItems: "center", justifyContent: "center" }
const titleStyle: React.CSSProperties = { ...centerFlex, fontSize: "20px" }
const contentStyle: React.CSSProperties = { ...centerFlex, height: "100px", width: "500px", }

const MnemonicConverter = () => {
    const [langage, setLangage] = useState<string>(MNEMONIC_LANGAGE[0])
    const [digit, setDigit] = useState<string>(DIGIT[0])

    const { mnemonic, publicKey, privateKey, address } = useMnemonicGenerator(digit, langage)

    const handleLangageChange = (event: SelectChangeEvent<string>) => {
        setLangage(event.target.value);
    };
    const handleDigitChange = (event: SelectChangeEvent<string>) => {
        setDigit(event.target.value);
    };

    return (
        <Grid>
            <Header />
            <SubTitle title="MnemonicConverter" />
            <Grid sx={{ ...centerFlex, flexDirection: "column", }}>
                <Grid sx={{ height: "100px", display: "flex", }}>
                    <Box sx={{ ...centerFlex }}>
                        <SelectBox value={langage} handleChange={handleLangageChange} options={MNEMONIC_LANGAGE} label="langage" />
                    </Box>
                    <Box sx={{ width: "50px" }} />
                    <Box sx={{ ...centerFlex }}>
                        <SelectBox value={digit} handleChange={handleDigitChange} options={DIGIT} label="digit" />
                    </Box>
                </Grid>
                <Box sx={{ height: "50px" }} />
                <Box sx={titleStyle}>
                    mnemonic
                </Box>
                <Box sx={contentStyle}>
                    {mnemonic}
                </Box>
                <Box sx={titleStyle}>
                    public key
                </Box>
                <Box sx={contentStyle}>
                    {publicKey}
                </Box>
                <Box sx={titleStyle}>
                    private key
                </Box>
                <Box sx={contentStyle}>
                    {privateKey}
                </Box>
                <Box sx={titleStyle}>
                    address
                </Box>
                <Box sx={contentStyle}>
                    {address}
                </Box>
            </Grid>
        </Grid >
    )

}

export default MnemonicConverter