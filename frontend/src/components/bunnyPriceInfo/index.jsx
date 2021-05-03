import React from 'react';

import styled from "styled-components";

import BunnyPriceImg from "../../assets/images/bunny-price.svg";



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

export function BunnyPriceInfo () {
    return (

      <BunnyPrice><img src={BunnyPriceImg} alt="!" /></BunnyPrice>


    );
}