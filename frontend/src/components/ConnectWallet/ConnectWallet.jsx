import React from "react";
import styled from "styled-components";

const ConnectWalletSection = styled.div`
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
    cursor: pointer;
`;

const ChainName = styled.div`
    padding: 0 8px 0 16px;
    color: #eee;
`;

const ConnectButton = styled.div`
    color: #fff;
    background-color: #ec6998;
    cursor: pointer;
    white-space: nowrap;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 42px;
    flex-direction: row;
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
        <ConnectWalletSection>
            <ChainName>ETH</ChainName>
            <ConnectButton>Connect Wallet</ConnectButton>
        </ConnectWalletSection>
    );
}