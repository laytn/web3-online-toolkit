import { Box, Grid } from "@mui/material"
import Header from "../Header"
import InputBox from "../InputBox"

const centerFlex: React.CSSProperties = { display: "flex", alignItems: "center", justifyContent: "center" }
const titleStyle: React.CSSProperties = { ...centerFlex, fontSize: "20px" }
const contentStyle: React.CSSProperties = { ...centerFlex, height: "100px", width: "500px", }

const hexConverter = () => {

    return (
        <Grid>
            <Header />
            <Box sx={{ height: "100px", fontWeight: 700, fontSize: "30px", ...centerFlex }}>
                HexConverter
            </Box>
            <Grid sx={{ ...centerFlex, flexDirection: "column", }}>
                <Box sx={titleStyle}>10 to hex</Box>
                <Grid sx={{ ...centerFlex, marginTop: "20px" }}>
                    <InputBox boxStyle={{ width: "300px", minWidth: "100px" }} placeholder="10" inputType="number" />
                    <Box sx={{ width: "50px" }} />
                    <Box sx={{ fontSize: "20px" }}>   Hex:</Box>
                </Grid>
            </Grid>
        </Grid >
    )

}

export default hexConverter