import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import styled, { keyframes } from "styled-components";
import loginImg from "../assets/images/loginImage.jpg";

const Login = () => {
  return (
    <TempPhoneContainer>
      <LayoutContainer>
        <Logo src={loginImg} alt="login" />
        <form>
          <Grid
            container
            alignItems="center"
            justify="center"
            direction="column"
          >
            <TextField
              id="login-input"
              name="login"
              label="login"
              sx={{ marginBottom: "32px" }}
            />
            <TextField
              id="password-input"
              name="password"
              label="password"
              sx={{ marginBottom: "32px" }}
            />
            <Button>Sign In</Button>
          </Grid>
        </form>
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

const rockingBus = keyframes`
  0%, 100% { transform: rotate(-.15deg); }
  15% { transform: rotate(.20deg); }
  20% {transform:scale(.9975);}
  25% { transform: rotate(-.20deg); }
  90% { transform: rotate(.15deg); }
  80% {transform:scale(.9975);}
  `;

const Logo = styled.img`
  width: 100%;
  animation-name: ${rockingBus};
  animation-duration: 2s;
  animation-iteration-count: infinite;
`;
