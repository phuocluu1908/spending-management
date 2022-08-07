import React from "react";
import styled from 'styled-components'

const TextField = ({ value, onChange, placeholder, type='' }) => {
  return (
    <CustomedTextField
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type={type}
    />
  );
};

const CustomedTextField = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 80px;
  background: #f3f3f3;
  padding-left: 5px;
`;

export default TextField;
