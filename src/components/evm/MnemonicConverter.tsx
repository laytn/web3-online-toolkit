import { Box, Grid } from "@mui/material"
import Header from "../Header"


const MnemonicConverter = () => {

    return (
        <Grid>
            <Header />
            <Box sx={{ height: "100px", fontWeight: 700, fontSize: "30px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                MnemonicConverter
            </Box>
        </Grid>
    )

}

export default MnemonicConverter