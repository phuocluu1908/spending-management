import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { updateScreen } from "../../store/Screen";
import { SPENDING_UPDATE } from "../../store/Screen/constants";
import editIcon from "../assets/edit-icon.png";

const SpendingList = () => {
  const dispatch = useDispatch()
  const spending = useSelector((state) => state.spending);

  const onUpdateScreen = () => {
    dispatch(updateScreen(SPENDING_UPDATE))
  }

  return (
    <Wrapper>
      {spending.map((content, i) => (
        <Item key={i}>
          <NameAndPriceContainer>
            <Name>{content.name}</Name>
            <Price>{content.price}</Price>
          </NameAndPriceContainer>
          <Description>{content.description}</Description>
          <AddedTimeAndUpdateWrapper>
            <AddedTime>{content.created}</AddedTime>
            <EditIconWrapper onClick={onUpdateScreen}>
              <EditIcon src={editIcon} />
            </EditIconWrapper>
          </AddedTimeAndUpdateWrapper>
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

const AddedTimeAndUpdateWrapper = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AddedTime = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
`;

const EditIconWrapper = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EditIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export default SpendingList;
