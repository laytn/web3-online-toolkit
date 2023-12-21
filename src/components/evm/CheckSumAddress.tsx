import { Box, Grid } from "@mui/material"
import Header from "../Header"
import InputBox from "../InputBox"
import { isEvmAddress, toCheckSumAddress } from "../../utils/web3Utils"
import { useState } from "react"

const CheckSumAddress = () => {
    const [isChecksumAddress, setIsChecksumAddress] = useState<boolean>(false);
    const [checksumAddress, setCheckSumAddress] = useState<string>("");

    const handleValueChange = (value: string) => {
        if (value === "" || !isEvmAddress(value)) {
            setCheckSumAddress("");
            setIsChecksumAddress(false);
            return;
        }

        const checksum: string = toCheckSumAddress(value);
        setCheckSumAddress(checksum);
        setIsChecksumAddress(value === checksum);
    }

    return (
        <Grid>
            <Header />
            <Box sx={{ height: "100px", fontWeight: 700, fontSize: "30px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                CheckSumAddress
            </Box>
            <Grid sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <Box sx={{ width: "30vw" }}>
                    <InputBox boxStyle={{ width: "100%", minWidth: "300px" }} placeholder="Address" onChangeValue={handleValueChange} />
                </Box>
                {checksumAddress && checksumAddress.length > 0 ? <Box sx={{ marginTop: "50px", color: "#696969" }}>
                    isCheckSumAddress: {isChecksumAddress.toString()} <br />
                    toCheckSumAddress: {checksumAddress}
                </Box> : ""}
            </Grid>
        </Grid>
    );
}

export default CheckSumAddress;
