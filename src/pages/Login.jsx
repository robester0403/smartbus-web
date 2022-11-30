import { Button } from "@mui/material";
import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import styled from "styled-components";
import loginImg from "../assets/images/login.png";

const Login = () => {
  return (
    <TempPhoneContainer>
      <LayoutContainer>
        <img src={loginImg} alt="login" />
        <div>login</div>
        <div>password</div>
        <Button>Sign In</Button>
      </LayoutContainer>
    </TempPhoneContainer>
  );
};

export default Login;

const TempPhoneContainer = styled.section`
  max-width: 480px;
  margin: 0 auto;
`;

const LayoutContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;
