import React, { useState, ChangeEvent, CSSProperties } from 'react';

interface InputBoxProps {
    boxStyle?: CSSProperties;
    inputStyle?: CSSProperties;
    placeholder?: string;
    dataValue?: string
    inputType?: string
    onChangeValue?: (value: string) => void;
}

const InputBox: React.FC<InputBoxProps> = ({ boxStyle, inputStyle, placeholder, onChangeValue, dataValue, inputType }) => {
    const [value, setValue] = useState<string>('');

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (inputType === "number") {
            const inputValue = e.target.value.replace(/[^0-9.]/g, '');

            setValue(inputValue);

            if (onChangeValue) {
                onChangeValue(inputValue);
            }
        }
        else {
            setValue(e.target.value);

            if (onChangeValue) {
                onChangeValue(e.target.value);
            }
        }

    };

    return (
        <div style={{ border: '0.5px solid black', padding: '10px', ...boxStyle }}>
            <input
                type="text"
                value={dataValue || value}
                onChange={handleInputChange}
                style={{
                    width: '100%',
                    boxSizing: 'border-box',
                    padding: '5px',
                    border: 'none',
                    outline: 'none',
                    ...inputStyle,
                }}
                placeholder={placeholder}
            />
        </div>
    );
};

export default InputBox;
