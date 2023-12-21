import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { InfoProvider } from './contexts/InfoContext';
import { WagmiConfig, createConfig, configureChains, mainnet } from 'wagmi'

import { InjectedConnector } from 'wagmi/connectors/injected'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


const { chains, publicClient } = configureChains(
  [mainnet],
  [
    jsonRpcProvider({
      rpc: () => ({
        http: "QUICKNODE_HTTP_PROVIDER_URL" // 👈 Replace this with your HTTP URL from the previous step
      }),
    })
  ]
);

const config = createConfig({
  autoConnect: true,
  publicClient,
  connectors: [
    new InjectedConnector({
      chains,
      options: {
        name: 'Injected',
        shimDisconnect: true,
      },
    })
  ]
})


root.render(
  <InfoProvider>
    <WagmiConfig config={config}>
      <App />
    </WagmiConfig>
  </InfoProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
