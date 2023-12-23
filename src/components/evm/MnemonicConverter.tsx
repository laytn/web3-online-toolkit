import { Box, Grid, Select, MenuItem, FormControl, InputLabel, SelectChangeEvent } from "@mui/material"
import Header from "../Header"
import { DIGIT, MNEMONIC_LANGAGE } from "../../stores/commonData"
import { useState } from "react"
import useMnemonicGenerator from "../../hooks/useMnemonicGenerator"

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