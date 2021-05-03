import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Coin from '../coinPrice';

import styled from "styled-components";



import BunnyPriceImg from "../../assets/images/bunny-price.svg";


const HeaderBunnyPrice = styled.div`
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 0 24px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

const BunnyPrice = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 700;
    color: #4ed8de;
    text-shadow: 0 0 12px #4ed8de;
    margin-right: 16px;
    cursor: pointer;
      img {
    width: auto;
    height: 26px;
    margin-right: 4px;
    transition: all .2s ease-in-out;
  }

`;

export function Header() {
    const[coins, setCoins] = useState([]);
   
    
        useEffect(() => {
            Axios
                .get(
                    'https://api.coingecko.com/api/v3/simple/price?ids=pancake-bunny&vs_currencies=usd'
                )
                .then(res => {
                    setCoins(res.data);
                    console.log(res.data);
                })
                .catch(error => console.log(error));
        }, []);

    

    const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase()
    );
    
        filteredCoins.map(coin => {
        return (
            <HeaderBunnyPrice>
                <BunnyPrice><img src={BunnyPriceImg} alt="!" />        <h1>
                    Bunny Price: <Coin price={coin.current_price}/>
                </h1></BunnyPrice>
            </HeaderBunnyPrice>
        );
        })

}