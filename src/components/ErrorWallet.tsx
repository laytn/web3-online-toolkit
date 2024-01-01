import { Box, Grid } from "@mui/material"

const centerFlex: React.CSSProperties = { display: "flex", alignItems: "center", justifyContent: "center" }

const ErrorWallet = () => {
    return (
        <Grid>
            <Box sx={{ height: "100px", fontWeight: 500, color: "red", fontSize: "30px", ...centerFlex }}>
                Please connect your wallet
            </Box>
        </Grid>
    )
}

export default ErrorWallet