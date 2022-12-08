import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { StyledInputTextField } from "../../styles/styled";

const validationSchema = yup.object({
  firstName: yup
    .string("Enter your First Name")
    .min(2, "First Name should be of minimum 2 characters length")
    .required("First Name is required"),
  lastName: yup
    .string("Enter your Last Name")
    .min(2, "Last Name should be of minimum 2 characters length")
    .required("Last Name is required"),
  userName: yup
    .string("Enter your username")
    .required("Username is required")
    .min(4, "Username should be of minimum 4 characters length"),
  email: yup
    .string("Enter an email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup.string().required("This field is required"),
  confirmPassword: yup.string().when("password", {
    is: (val) => (val && val.length > 0 ? true : false),
    then: yup
      .string()
      .oneOf([yup.ref("password")], "Both passwords need to be the same"),
  }),
});

const defaultValues = {
  firstName: "",
  lastName: "",
  userName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Signup = () => {
  const formik = useFormik({
    initialValues: defaultValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container alignItems="center" justify="center" direction="column">
        <StyledInputTextField
          id="firstName-input"
          name="firstName"
          label="First Name"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.touched.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />
        <StyledInputTextField
          id="lastName-input"
          name="lastName"
          label="Last Name"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          error={formik.touched.lastName && Boolean(formik.touched.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
        />
        <StyledInputTextField
          id="userName-input"
          name="userName"
          label="Username"
          value={formik.values.userName}
          onChange={formik.handleChange}
          error={formik.touched.userName && Boolean(formik.touched.userName)}
          helperText={formik.touched.userName && formik.errors.userName}
        />
        <StyledInputTextField
          id="email-input"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.touched.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <StyledInputTextField
          id="password-input"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <StyledInputTextField
          id="confirmPassword-input"
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          error={
            formik.touched.password && Boolean(formik.errors.confirmPassword)
          }
          helperText={
            formik.touched.confirmPassword && formik.errors.confirmPassword
          }
        />
        <Button variant="contained" color="primary" type="submit">
          Sign In
        </Button>
        <Typography variant="body2" sx={{ marginTop: "16px" }}>
          <Link to="/login">Have an account? Back to login</Link>
        </Typography>
      </Grid>
    </form>
  );
};

export default Signup;
