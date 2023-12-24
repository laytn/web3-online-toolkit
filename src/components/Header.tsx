import { Box, Grid } from "@mui/material"
import { useState } from "react"
import Title from "./Title"
import { useNavigate } from "react-router-dom";
import EvmWalletProvider from "../providers/EvmWalletProvider";

const SUPPORT_CHAINS = ["Evm"]

const Header = () => {
    const navigate = useNavigate();
    const [mainTitle, setMainTitle] = useState<string>("Evm")

    const handleTitleClick = (title: string) => {
        setMainTitle(title)
        navigate(`/${title.toLowerCase()}`);
    }
    return (
        <div>
            <Grid sx={{ height: "70px", width: "100%", backgroundColor: "#f5f8ff", borderBottom: "0.5px solid #ddd", paddingLeft: "60px", paddingRight: "60px", display: "flex", alignItems: "center", }}>
                <Grid sx={{ display: "flex", justifyContent: "space-between", width: "100%", alignItems: "center" }}>
                    <Box onClick={() => {
                        navigate(`/`);
                    }} sx={{ width: "300px", fontWeight: "bold", cursor: "pointer" }}>
                        WEB3-ONLINE-TOOLKIT
                    </Box>
                    <Box sx={{ display: "flex", width: "100%" }}>
                        {SUPPORT_CHAINS.map((itme, index) => (
                            <Box onClick={() => { handleTitleClick(itme) }} sx={{ marginLeft: 10, color: "#495469", fontWeight: "600", cursor: "pointer" }} key={index}>
                                {itme}
                            </Box>
                        ))
                        }
                    </Box>
                    <Box sx={{ width: "300px", display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
                        <EvmWalletProvider />
                    </Box>
                </Grid>
            </Grid>
            <Title title={mainTitle} />
        </div>
    )
}

export default Header

// Todo 고차함수 최적화: 키값을 인덱스로 설정할 시 리렌더링 시 성능저하가 있음 