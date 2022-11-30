import { Button } from "@mui/material";
import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import styled from "styled-components";

const Login = () => {
  return (
    <TempPhoneContainer>
      <LayoutContainer>
        <div>image</div>
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
