import React from "react";
import styled from "styled-components";

const contents = [
  { name: "Breakfast", price: 20000, description: "Just oke" },
  {
    name: "Lunch",
    price: 40000,
    description: "Having lunch at the company with collegue",
  },
  { name: "Dinner", price: 10000, description: "" },
  {
    name: "Coffee",
    price: 40000,
    description: "Drinking coffee helps us sleep better",
  },
  { name: "Breakfast", price: 20000, description: "Just oke" },
  {
    name: "Lunch",
    price: 40000,
    description: "Having lunch at the company with collegue",
  },
  { name: "Dinner", price: 10000, description: "" },
  {
    name: "Coffee",
    price: 40000,
    description: "Drinking coffee helps us sleep better",
  },
  { name: "Breakfast", price: 20000, description: "Just oke" },
  {
    name: "Lunch",
    price: 40000,
    description: "Having lunch at the company with collegue",
  },
  { name: "Dinner", price: 10000, description: "" },
  {
    name: "Coffee",
    price: 40000,
    description: "Drinking coffee helps us sleep better",
  },
  { name: "Breakfast", price: 20000, description: "Just oke" },
  {
    name: "Lunch",
    price: 40000,
    description: "Having lunch at the company with collegue",
  },
  { name: "Dinner", price: 10000, description: "" },
  {
    name: "Coffee",
    price: 40000,
    description: "Drinking coffee helps us sleep better",
  },
];

const SpendingList = () => {
  return (
    <Wrapper>
      {contents.map((content, i) => (
        <Item>
          <NameAndPriceContainer>
            <Name>{content.name}</Name>
            <Price>{content.price}</Price>
          </NameAndPriceContainer>
          <Description>{content.description}</Description>
        </Item>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: calc(100vw - 32px);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 16px;
  margin: 0 auto;
`;

const Item = styled.div`
  width: 100%;
  background: aqua;
  border-radius: 8px;
  padding: 4px;
  box-sizing: border-box;
`;

const NameAndPriceContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
`;

const Name = styled.div`
  height: 100%;
  color: black;
  font-weight: 500;
  font-size: 16px;
  display: flex;
  align-items: center;
  flex: 1;
`;

const Price = styled.div`
  width: auto;
  height: 100%;
  color: black;
  font-weight: 500;
  font-size: 16px;
  display: flex;
  align-items: center;
`;

const Description = styled.div`
  width: 100%;
  max-height: 80px;
  overflow: hidden;
  color: #2f2f2f;
`;

export default SpendingList;
