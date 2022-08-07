import React from "react";
import styled from 'styled-components'

const Button = ({ text, onClick }) => {
  return <CustomButton onClick={onClick}>{text}</CustomButton>;
};

const CustomButton = styled.button`
  width: 70%;
  height: 40px;
  background: linear-gradient(
    43deg,
    rgb(65, 88, 208) 0%,
    rgb(200, 80, 192) 46%,
    rgb(255, 204, 112) 100%
  );
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  border: none;
`;

export default Button;
