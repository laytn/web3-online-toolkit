import { Box, Grid } from "@mui/material"
import Header from "../Header"
import { useState } from "react"
import * as conversionUtils from "../../utils/web3Utils";
import InputBox from "../InputBox";
import SubTitle from "../vac/SubTitle";

const unitBox: React.CSSProperties = { height: "60px", width: "300px", display: "flex", alignItems: "flex-end", justifyContent: "left", color: "#696969", fontSize: "18px" }
const inputBox: React.CSSProperties = { width: "35vw", display: "flex", alignItems: "center", justifyContent: "left" }
const hexBox: React.CSSProperties = { color: "#696969", fontSize: "14px" }

const UnitConverter = () => {
    const [wei, setWei] = useState<string>();
    const [gwei, setGwei] = useState<string>();
    const [ether, setEther] = useState<string>();
    const [weiHex, setWeiHex] = useState<string>();
    const [gweiHex, setGweiHex] = useState<string>();
    const [etherHex, setEtherHex] = useState<string>();

    const handleWeiChange = (value: string) => {
        if (value === "") {
            return;
        }
        const wei: number = parseFloat(value);
        const gwei: number = conversionUtils.weiToGwei(wei)
        const ether: number = conversionUtils.weiToEther(wei)

        setWei("");
        setWeiHex("")
        setGwei(gwei.toFixed(9).toString());
        setEther(ether.toFixed(18).toString());
        setGweiHex(gwei.toString(16))
        setEtherHex(ether.toString(16))
    };

    const handleGweiChange = (value: string) => {
        if (value === "") {
            return;
        }
        const gwei: number = parseFloat(value);
        const wei: number = conversionUtils.gweiToWei(gwei);
        const ether: number = conversionUtils.gewiToEther(gwei);

        setGwei("");
        setGweiHex("")
        setWei(wei.toString());
        setEther(ether.toFixed(9).toString());
        setWeiHex(wei.toString(16));
        setEtherHex(ether.toString(16));
    };

    const handleEtherChange = (value: string) => {
        if (value === "") {
            return;
        }
        setEther("");
        setEtherHex("")

        const ether: number = parseFloat(value);
        const wei: number = conversionUtils.etherTowei(ether);
        const gwei: number = conversionUtils.etherToGwei(ether);

        setWei(wei.toString());
        setGwei(gwei.toString());
        setWeiHex(wei.toString(16));
        setGweiHex(gwei.toString(16));
    };

    return (
        <Grid>
            <Header />
            <SubTitle title="UnitConverter" />
            <Grid sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Grid sx={{ height: "300px", width: "50vw", minWidth: "600px" }}>
                    <Grid sx={{ height: "100px", display: "flex" }} >
                        <Box>
                            <Box sx={unitBox}>
                                Wei
                            </Box>
                            <Box sx={hexBox}>{weiHex}</Box>
                        </Box>
                        <Box sx={inputBox}>
                            <InputBox boxStyle={{ width: "100%", minWidth: "300px" }} onChangeValue={handleWeiChange} placeholder="Wei" dataValue={wei} inputType="number" />
                        </Box>
                    </Grid>
                    <Grid sx={{ height: "100px", display: "flex" }} >
                        <Box>
                            <Box sx={unitBox}>
                                Gwei
                            </Box>
                            <Box sx={hexBox}>{gweiHex}</Box>
                        </Box>
                        <Box sx={inputBox}>
                            <InputBox boxStyle={{ width: "100%", minWidth: "300px" }} onChangeValue={handleGweiChange} placeholder="Gwei" dataValue={gwei} inputType="number" />
                        </Box>
                    </Grid>
                    <Grid sx={{ height: "100px", display: "flex" }} >
                        <Box>
                            <Box sx={unitBox}>
                                Ether
                            </Box>
                            <Box sx={hexBox}>{etherHex}</Box>
                        </Box>
                        <Box sx={inputBox}>
                            <InputBox boxStyle={{ width: "100%", minWidth: "300px" }} onChangeValue={handleEtherChange} placeholder="Ether" dataValue={ether} inputType="number" />
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )

}

export default UnitConverter