import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { SPENDING_ADD } from "../../store/Screen/constants";
import { addSpending } from "../../store/Spending";
import Button from "../common/Button";
import TextField from "../common/TextField";

const SpendingAdd = () => {
  const screen = useSelector(state => state.screen.value)
  const dispatch = useDispatch();
  const [spendingInfo, setSpendingInfo] = useState({
    name: "",
    price: "",
    description: "",
  });

  const addSpendingAction = () => {
    const created = new Date();
    dispatch(addSpending({ ...spendingInfo, created }));
  };

  const onChange = (e, type) => {
    setSpendingInfo((prevState) => ({ ...prevState, [type]: e.target.value }));
  };

  const buttonText = screen === SPENDING_ADD ? 'Add' : 'Update'

  return (
    <Wrapper>
      <TextField
        placeholder="Name"
        value={spendingInfo.name}
        onChange={(e) => onChange(e, "name")}
      />
      <TextField
        placeholder="Price"
        value={spendingInfo.price}
        onChange={(e) => onChange(e, "price")}
      />
      <TextField
        placeholder="Description"
        value={spendingInfo.description}
        onChange={(e) => onChange(e, "description")}
      />
      <Button text={buttonText} onClick={addSpendingAction} />
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

export default SpendingAdd;
