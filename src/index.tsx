import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { WagmiConfig, createConfig, configureChains, mainnet } from 'wagmi'
import { klaytn } from '@wagmi/core/chains'

import { InjectedConnector } from 'wagmi/connectors/injected'
import { publicProvider } from 'wagmi/providers/public'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const { chains, publicClient } = configureChains(
  [mainnet, klaytn],
  [publicProvider()],
)

const config = createConfig({
  autoConnect: false,
  publicClient,
  connectors: [
    new MetaMaskConnector({
      chains,
    }),
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
  <WagmiConfig config={config}>
    <App />
  </WagmiConfig>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
