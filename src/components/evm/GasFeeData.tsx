import React from 'react';
import { Box, Grid, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import Header from '../Header';
import { useNetwork, useFeeData } from 'wagmi';
import ErrorWallet from '../ErrorWallet';


const centerFlex: React.CSSProperties = { display: 'flex', alignItems: 'center', justifyContent: 'center' };

const GasFeeData = () => {

    const { data } = useFeeData()
    const { chain } = useNetwork();
    let tableData

    if (!data || !chain) {
        return (
            <Grid>
                <Header />
                <Box sx={{ height: '100px', fontWeight: 700, fontSize: '30px', ...centerFlex }}>
                    GasFeeData
                </Box>
                <ErrorWallet />
            </Grid>
        );
    }

    tableData = [
        { label: 'ChainId', value: chain.id },
        { label: 'gasPrice', value: data["gasPrice"] + "" },
        { label: 'lastBaseFeePerGas', value: data["lastBaseFeePerGas"] + "" },
        { label: 'maxFeePerGas', value: data["maxFeePerGas"] + "" },
        { label: 'maxPriorityFeePerGas', value: data["maxPriorityFeePerGas"] + "" },
    ];

    return (
        <Grid>
            <Header />
            <Box sx={{ height: '100px', fontWeight: 700, fontSize: '30px', ...centerFlex }}>
                GasFeeData
            </Box>
            <Grid sx={{ ...centerFlex }}>
                <TableContainer sx={{ height: "500px", minWidth: "400px", width: "600px" }}>
                    <Table>
                        <TableBody>
                            {tableData.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell>{row.label}</TableCell>
                                    <TableCell>{row.value}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>

        </Grid>
    );



};

export default GasFeeData;
