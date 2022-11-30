import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import loginImg from "../assets/images/loginImage.jpg";
import { LayoutContainer, Logo, TempPhoneContainer } from "../styles/styled";
import { useFormik } from "formik";
import * as yup from "yup";

const validationsSchema = yup.object({
  login: yup
    .string("Enter your login (required)")
    .min(3, "Login must be at least 3 characters")
    .required("Login is required"),
  password: yup.string("Enter your password").required("Password is required"),
});

const Login = () => {
  const formik = useFormik({
    validationSchema: validationsSchema,
    onSubmit: async (formValues) => {
      console.log({ ...formValues });
    },
  });
  return (
    <TempPhoneContainer>
      <LayoutContainer>
        <Logo src={loginImg} alt="login" />
        <form onSubmit={formik.handleSubmit}>
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
              value={formik.values.login}
              onChange={formik.handleChange}
              error={formik.touched.login && Boolean(formik.touched.login)}
              helperText={formik.touched.login && formik.errors.login}
              sx={{ marginBottom: "32px" }}
            />
            <TextField
              id="password-input"
              name="password"
              label="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
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
