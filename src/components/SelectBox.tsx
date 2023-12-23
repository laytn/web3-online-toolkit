import { Select, MenuItem, FormControl, InputLabel, SelectChangeEvent } from "@mui/material"

interface SelectBoxProps {
    value: string
    handleChange: (event: SelectChangeEvent<string>) => void
    options: string[]
    label: string
}

const SelectBox = ({ value, handleChange, options, label }: SelectBoxProps) => {
    return (
        <>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">{label}</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={value}
                    onChange={handleChange}
                    label={label}
                >
                    {options.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </>
    )
}

export default SelectBox