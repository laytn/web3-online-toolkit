import { Box, Select, MenuItem, FormControl, InputLabel, SelectChangeEvent } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { EVM_CHAINS, EVM_FUNCS } from "../../stores/evmData";
import useInfoStore from "../../states/infoStore";
import SelectBox from "../SelectBox";

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
            <SelectBox value={chainName} handleChange={handleSelectChainChange} options={EVM_CHAINS} label="chain" />
            <Box sx={{ width: "50px" }} />
            <FormControl sx={{ width: "300px" }}>
                <InputLabel id="select-label">funcs</InputLabel>
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

