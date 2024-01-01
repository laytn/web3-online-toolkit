import { Box, Grid } from "@mui/material"
import Header from "../Header"
import InputBox from "../InputBox"
import { useState } from "react"
import SubTitle from "../vac/SubTitle"

const centerFlex: React.CSSProperties = { display: "flex", alignItems: "center", justifyContent: "center" }

const HexConverter = () => {
    const [decimal, setDecimal] = useState<string>();
    const [hex, setHex] = useState<string>();

    const handleDecimalChange = (value: string) => {
        setDecimal(value);
        setHex(parseInt(value, 10).toString(16));
    };

    const handleHexChange = (value: string) => {
        setHex(value);
        setDecimal(parseInt(value, 16).toString(10));
    };
    return (
        <Grid>
            <Header />
            <SubTitle title="HexConverter" />
            <Grid sx={{ ...centerFlex, flexDirection: "column", }}>
                <Grid sx={{ ...centerFlex, marginTop: "20px" }}>
                    <InputBox boxStyle={{ width: "300px", minWidth: "100px" }} onChangeValue={handleDecimalChange} placeholder="10" dataValue={decimal} inputType="number" />
                    <Box sx={{ width: "50px" }} />
                    <InputBox boxStyle={{ width: "300px", minWidth: "100px" }} onChangeValue={handleHexChange} placeholder="Hex" dataValue={hex} inputType="string" />
                </Grid>
            </Grid>
        </Grid >
    )

}

export default HexConverter