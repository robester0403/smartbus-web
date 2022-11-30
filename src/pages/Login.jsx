import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import loginImg from "../assets/images/loginImage.jpg";
import { LayoutContainer, Logo, TempPhoneContainer } from "../styles/styled";

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
            <Button variant="contained" color="primary" type="submit">
              Sign In
            </Button>
          </Grid>
        </form>
      </LayoutContainer>
    </TempPhoneContainer>
  );
};

export default Login;
