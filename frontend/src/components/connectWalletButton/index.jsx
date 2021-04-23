import React from 'react';

import { NetworkErrorMessage } from "../networkErrorMessage";

import styled from "styled-components";

const AccountButton = styled.div`
    height: 42px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 18px;
    color: #c8c8c8;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 1.2px;
    text-align: center;
    background-color: #712d45;
    box-shadow: none;
`;

const ChainName = styled.div`
    padding: 0 8px 0 16px;
    color: #eee;
`;

const AddressButton = styled.button`
    height: 42px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #ec6998;
    lign-items: center;
    border-radius: 18px;
    color: #c8c8c8;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 1.2px;
    text-align: center;
    padding: 0 24px;
    box-shadow: none;
    
`;


export function ConnectWallet({ connectWallet, networkError, dismiss }) {
    return (
<AccountButton>
    <ChainName>ETH</ChainName>
            <AddressButton onClick={connectWallet}>
                {/* Metamask network should be set to Localhost:8545. */}
                {networkError && (
                    <NetworkErrorMessage
                        message={networkError}
                        dismiss={dismiss}
                    />
                )}
                <ChainName>CONNECT YOUR WALLET</ChainName>
    </AddressButton>
</AccountButton>

    );
}