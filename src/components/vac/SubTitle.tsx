import { Box } from "@mui/material"

type TitleProps = {
    title: string;
};

const SubTitle = ({ title }: TitleProps) => {
    return (
        <Box sx={{ height: "100px", fontWeight: 700, fontSize: "30px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {title}
        </Box>
    )

}

export default SubTitle