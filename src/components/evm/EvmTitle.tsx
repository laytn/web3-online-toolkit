import { Box, Select, MenuItem, FormControl, InputLabel, SelectChangeEvent } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { EVM_CHAINS, EVM_FUNCS } from "../../stores/evmData";
import useInfoStore from "../../states/infoStore";

const EvmTitle = () => {
    const { chainName, funcName, setChainName, setFuncName } = useInfoStore();

    const navigate = useNavigate();

    const handleSelectChainChange = (event: SelectChangeEvent<string>) => {
        setChainName(event.target.value);
    };

    const handleSelectFucnChange = (event: SelectChangeEvent<string>) => {
        setFuncName(event.target.value);
        navigate(`/evm/${event.target.value}`)
    };

    return (
        <Box sx={{ height: "75px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">Chain</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={chainName}
                    onChange={handleSelectChainChange}
                    label="Chain"
                >
                    {EVM_CHAINS.map((func) => (
                        <MenuItem key={func} value={func}>
                            {func}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <Box sx={{ width: "50px" }} />
            <FormControl sx={{ width: "300px" }}>
                <InputLabel id="select-label">Funcs</InputLabel>
                <Select
                    labelId="select-label"
                    value={funcName}
                    label="choies"
                    onChange={handleSelectFucnChange}
                >
                    {EVM_FUNCS.map((func) => (
                        <MenuItem key={func} value={func}>
                            {func}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
};

export default EvmTitle;

