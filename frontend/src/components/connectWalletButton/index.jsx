import React from 'react';

import { NetworkErrorMessage } from "../networkErrorMessage";

import styled from "styled-components";


const ContainerLogin = styled.div`
    max-width: 800px; 
    width: 100%;
    margin: 0 auto;
    padding: 0 24px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;  
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

`;
const PageHeaderTitle = styled.div`
    margin: 15px 0;
    padding: 0;
    font-size: 20px;
    color: #4ed8de;
    text-shadow: 0 0 12px #4ed8de;
    font-weight: 600;
    text-align: center;
`;


const AccountButton = styled.button`
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
    background-color: #ec6998;
    box-shadow: none;
    white-space: nowrap;
    cursor: pointer;
`;

const ChainName = styled.div`
    padding: 0 8px 0 16px;
    color: #eee;



`;

export function ConnectWallet({ connectWallet, networkError, dismiss }) {
    return (

    <ContainerLogin>
            <PageHeaderTitle>I'm the KING of #PANCAKEBUNNY👑🐰🥞👑</PageHeaderTitle>
            <AccountButton onClick={connectWallet}>
                {/* Metamask network should be set to ROPSTEN. */}
                {networkError && (
                    <NetworkErrorMessage
                        message={networkError}
                        dismiss={dismiss}
                    />
                )}

                            <ChainName>CONNECT YOUR WALLET</ChainName>

        </AccountButton>
    </ContainerLogin>

    );
}