import React, { useState } from "react";
import styled from "styled-components";
import Button from "../common/Button";
import TextField from "../common/TextField";

function checkEmailAddress(email_address) {
  return /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email_address);
}

const credentials = {
  email: "luutp1908@gmail.com",
  password: "123456",
};

const LoginPage = () => {
  const [info, setInfo] = useState({ email: "", password: "" });
  const [error, setError] = useState();

  const handleValidate = () => {
    if (!info.email || !info.password) {
      setError("Please fill out your email and password");
      return;
    }

    if (!checkEmailAddress(info.email)) {
      setError("email is not valid");
      return;
    }

    if (
      info.email !== credentials.email ||
      info.password !== credentials.password
    ) {
      setError("Wrong credentials");
      return;
    }

    if (error) {
      setError("");
    }
  };

  const handleChange = (e, type) => {
    setInfo((prevState) => ({ ...prevState, [type]: e.target.value }));
  };

  const handleSubmit = () => {
    handleValidate();
  };

  return (
    <Wrapper>
      <TextFieldContainer>
        <TextField
          value={info.email}
          onChange={(e) => handleChange(e, "email")}
          placeholder="Enter your username"
        />
        <TextField
          value={info.password}
          onChange={(e) => handleChange(e, "password")}
          placeholder="Enter your password"
          type="password"
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Button onClick={handleSubmit} text='Login' />
      </TextFieldContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: aqua;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextFieldContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 200px;
`;

const ErrorMessage = styled.div`
  width: 100%;
  color: red;
  display: flex;
  justify-content: center;
`;

export default LoginPage;
