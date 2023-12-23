import { create } from "zustand";
import { EVM_CHAINS, EVM_FUNCS } from "../stores/evmData";

interface UseInfoStore {
    chainName: string;
    funcName: string;
    setChainName: (value: string) => void;
    setFuncName: (value: string) => void;
}

const useInfoStore = create<UseInfoStore>((set) => ({
    chainName: EVM_CHAINS[0],
    funcName: EVM_FUNCS[0],
    setChainName: (value: string) => set({ chainName: value }),
    setFuncName: (value: string) => set({ funcName: value }),
}));

export default useInfoStore;
