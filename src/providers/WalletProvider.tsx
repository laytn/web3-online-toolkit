import React from 'react';
import { useAccount, useConnect, useDisconnect, useBalance } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';

function WalletProvider() {
    const { address } = useAccount();
    const { connect, } = useConnect({
        connector: new InjectedConnector(),
    });
    const { disconnect } = useDisconnect();
    const { data, } = useBalance({
        address: address,
    });
    // if (address) {
    //     return (
    //         <div className="d-flex justify-content-center align-items-center vh-100">
    //             <div className="text-center">
    //                 <p>Connected to {address}</p>
    //                 <p>Balance: {data ? data.formatted : 'Loading...'} ETH</p>
    //                 {/* Add the appropriate way to get the chain ID */}
    //                 <p>Chain ID: {/* Use the appropriate value for Chain ID */}</p>
    //                 <button className="btn btn-primary mt-3" onClick={disconnect}>
    //                     Disconnect
    //                 </button>
    //             </div>
    //         </div>
    //     );
    // }

    // if (isConnecting) {
    //     return (
    //         <div className="d-flex justify-content-center align-items-center vh-100">
    //             <p>Connecting...</p>
    //         </div>
    //     );
    // }

    return (
        <button className="btn btn-primary" onClick={() => connect()}>
            Connect Wallet
        </button>
    );
}

export default WalletProvider;
