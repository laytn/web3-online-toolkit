import React, { useEffect, useState } from 'react';
import { useAccount, useConnect, useDisconnect, useSwitchNetwork, useNetwork } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import useInfoStore from '../states/infoStore';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { EVM_CHAIN_IDS } from '../stores/evmData';

const findKeyByValue = (object: { [key: string]: number }, value: number) => {
    return Object.keys(object).find(key => object[key] === value);
};

const EvmWalletProvider = () => {
    const { address } = useAccount();
    const { connect } = useConnect({ connector: new InjectedConnector() });
    const { chainName, setChainName } = useInfoStore();
    const { switchNetworkAsync } = useSwitchNetwork();
    const { chain } = useNetwork();
    const { disconnect } = useDisconnect();
    const [coinIconPath, setCoinIconPath] = useState<string | undefined>();

    useEffect(() => {
        const handleSwitchNetwork = async () => {
            try {
                if (switchNetworkAsync && chain) {
                    await switchNetworkAsync(EVM_CHAIN_IDS[chainName]);
                }
            } catch (error) {
                if (chain) {
                    const foundChainName = findKeyByValue(EVM_CHAIN_IDS, chain.id);
                    if (foundChainName) {
                        setChainName(foundChainName);
                    }
                }
            }
        };

        if (chain) {
            const foundChainName = findKeyByValue(EVM_CHAIN_IDS, chain.id);
            if (foundChainName) {
                setCoinIconPath(`${foundChainName.toLowerCase()}.png`);
            }
        }

        handleSwitchNetwork();
    }, [chainName, switchNetworkAsync, chain, setChainName]);

    const renderAuthenticatedView = () => (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="d-flex">
                <div className="me-5 d-flex justify-content-center align-items-center">
                    <img src={`${process.env.PUBLIC_URL}/${coinIconPath}`} alt={chainName} style={{ width: '30px', height: '30px' }} />
                </div>
                <button className="btn btn-primary" onClick={() => disconnect()}>
                    <HighlightOffIcon />
                </button>
            </div>
        </div>
    );

    const renderUnauthenticatedView = () => (
        <button className="btn btn-primary" onClick={() => connect()}>
            <AccountBalanceWalletIcon />
        </button>
    );

    return address ? renderAuthenticatedView() : renderUnauthenticatedView();
};

export default EvmWalletProvider;
