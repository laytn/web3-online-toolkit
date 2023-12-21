import { createContext, useState, ReactNode } from "react";

const InfoContext = createContext({
    chainName: "Ethereum",
    setChainName: (value: string) => { },
    funcName: "unitConvert",
    setFuncName: (value: string) => { },
});

export const InfoProvider = ({ children }: { children: ReactNode }) => {
    const [chainName, setChainName] = useState<string>("Ethereum");
    const [funcName, setFuncName] = useState<string>("unitConvert");

    return (
        <InfoContext.Provider
            value={{
                chainName,
                setChainName,
                funcName,
                setFuncName
            }}
        >
            {children}
        </InfoContext.Provider>
    );
};

export default InfoContext;