import { Box, Grid, Select, MenuItem, FormControl, InputLabel, SelectChangeEvent } from "@mui/material"
import Header from "../Header"
import { DIGIT, MNEMONIC_LANGAGE } from "../../stores/commonData"
import { useState } from "react"
import useMnemonicGenerator from "../../hooks/useMnemonicGenerator"
import SelectBox from "../SelectBox"

const MnemonicConverter = () => {
    const [langage, setLangage] = useState<string>(MNEMONIC_LANGAGE[0])
    const [digit, setDigit] = useState<string>(DIGIT[0])

    const { mnemonic, privateKey } = useMnemonicGenerator(digit, langage)

    const handleLangageChange = (event: SelectChangeEvent<string>) => {
        setLangage(event.target.value);
    };
    const handleDigitChange = (event: SelectChangeEvent<string>) => {
        setDigit(event.target.value);
    };

    return (
        <Grid>
            <Header />
            <Box sx={{ height: "100px", fontWeight: 700, fontSize: "30px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                MnemonicConverter
            </Box>
            <Grid sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", }}>
                <Grid sx={{ height: "100px", display: "flex", }}>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <SelectBox value={langage} handleChange={handleLangageChange} options={MNEMONIC_LANGAGE} label="langage" />
                    </Box>
                    <Box sx={{ width: "50px" }} />
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <SelectBox value={digit} handleChange={handleDigitChange} options={DIGIT} label="digit" />
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