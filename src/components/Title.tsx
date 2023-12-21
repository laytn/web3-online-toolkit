import { Grid, Box, } from "@mui/material";

import EvmTitle from "./evm/EvmTitle";

type TitleProps = {
    title: string;
};

const Title = ({ title }: TitleProps) => {
    return (
        <Grid
            sx={{
                height: "250px",
                width: "100%",
                backgroundColor: "#f5f8ff",
                paddingLeft: "60px",
                paddingRight: "60px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Box sx={{ fontWeight: "bold", fontSize: "35px", height: "125px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {title}
            </Box>
            {title === "Evm" ? <EvmTitle /> : ""}
        </Grid>
    );
};

export default Title;
