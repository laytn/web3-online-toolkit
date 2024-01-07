import { Box, Grid } from "@mui/material"
import Header from "../Header"
import SubTitle from "../vac/SubTitle"
import InputBox from "../InputBox";
import { useState } from "react";
import { ethers } from "ethers";

const centerFlex: React.CSSProperties = { display: 'flex', alignItems: 'center', justifyContent: 'center' };

const SignatureRecover = () => {
    const [digest, setDigest] = useState<string>();
    const [signature, setSignature] = useState<string>();
    const [recoverAddress, setRecoverAddress] = useState<string>();


    const handleDigestChange = (value: string) => {
        setDigest(value)
    }
    const handleSignatureChange = (value: string) => {
        setSignature(value)
    }
    const onClickRecover = () => {
        if (digest && signature) {
            const address = ethers.recoverAddress(digest, signature)
            setRecoverAddress(address)
        }
    }

    return (
        <Grid>
            <Header />
            <SubTitle title="SignatureRecover" />
            <Grid sx={{ ...centerFlex }}>
                <Grid sx={{ width: "600px" }} >
                    <InputBox boxStyle={{ width: "100%", minWidth: "300px" }} onChangeValue={handleDigestChange} placeholder="digest" dataValue={digest} inputType="string" />
                    <Box sx={{ height: "30px" }} />
                    <InputBox boxStyle={{ width: "100%", minWidth: "300px" }} onChangeValue={handleSignatureChange} placeholder="signature" dataValue={signature} inputType="string" />
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                        {recoverAddress}
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                        <button className="btn btn-primary" onClick={onClickRecover}>
                            recover
                        </button>
                    </Box>
                </Grid>
            </Grid>

        </Grid >
    )
}

export default SignatureRecover