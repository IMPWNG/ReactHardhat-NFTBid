import React from "react";
import styled from "styled-components";
import { Marginer } from "../marginer";

import BunnyPancakeImg from "../../assets/images/pancake-bunny.svg";

const DetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2.5em 6px 0 6px;
  line-height: 1.4;
`;

const MediumText = styled.span`
  font-size: 18px;
  color: #4ed8de;
  font-weight: 800;
  text-transform: uppercase;
  text-shadow: 0 0 12px #4ed8de;

`;

const SmallText = styled.span`
  font-size: 11px;
  color: #4ed8de;
  font-weight: 700;
  text-transform: uppercase;
  text-shadow: 0 0 12px #4ed8de;
`;

const SpacedHorizontalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BuyButton = styled.button`
  padding: 10px 16px;
  background-color: #ec6998;
  color: #4ed8de;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
  border: 3px solid transparent;
  outline: none;
  cursor: pointer;
  transition: all 290ms ease-in-out;
  border-radius: 8px;

  &:hover {
    background-color: transparent;
    color: #ec6998;
    border: 3px solid #4ed8de;
  }
`;

const BunnyPancakeLogo = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: auto;
    height: 30px;
  }
`;

export function BunnyDetails(props) {
  return (
    <DetailsContainer>
      <SmallText>PANCAKEBUNNY KINGDOM® PRICE</SmallText>
      <SpacedHorizontalContainer>
        <MediumText>ACTUAL BID : </MediumText>
        <MediumText>Ξ420</MediumText>
      </SpacedHorizontalContainer>
      <Marginer direction="vertical" margin="1.2em" />
      <SpacedHorizontalContainer>
        <MediumText>YOUR BID </MediumText>
        <BuyButton>BUY</BuyButton>
      </SpacedHorizontalContainer>
      <BunnyPancakeLogo>
        <img src={BunnyPancakeImg} />
      </BunnyPancakeLogo>
    </DetailsContainer>
  );
}
