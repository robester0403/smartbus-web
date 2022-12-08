import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import loginImg from "../../assets/images/loginImage.jpg";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { Logo, StyledInputTextField } from "./LoginStyle";

const validationsSchema = yup.object({
  login: yup
    .string("Enter your login (required)")
    .min(3, "Login must be at least 3 characters")
    .required("Login is required"),
  password: yup.string("Enter your password").required("Password is required"),
});

const defaultValues = {
  login: "",
  password: "",
};

const Login = () => {
  const formik = useFormik({
    initialValues: defaultValues,
    validationSchema: validationsSchema,
    onSubmit: async (formValues) => {
      console.log({ ...formValues });
    },
  });
  return (
    <>
      <Logo src={loginImg} alt="login" />
      <form onSubmit={formik.handleSubmit}>
        <Grid container alignItems="center" justify="center" direction="column">
          <StyledInputTextField
            id="login-input"
            name="login"
            label="login"
            value={formik.values.login}
            onChange={formik.handleChange}
            error={formik.touched.login && Boolean(formik.touched.login)}
            helperText={formik.touched.login && formik.errors.login}
          />
          <StyledInputTextField
            id="password-input"
            name="password"
            label="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button variant="contained" color="primary" type="submit">
            Sign In
          </Button>
          <Typography variant="body2" sx={{ marginTop: "16px" }}>
            <Link to="/signup">Do not have an account? Signup here.</Link>
          </Typography>
        </Grid>
      </form>
    </>
  );
};

export default Login;
