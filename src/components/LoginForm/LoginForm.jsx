import { Formik } from "formik";
import * as yup from "yup";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";
import {
  EyeBtnStyled,
  FieldErrorStyled,
  LoginDescr,
  LoginTitle,
  StyledButton,
  StyledField,
  StyledForm,
} from "./LoginForm.Styled";

const schema = yup.object().shape({
  name: yup.string().min(2).required("Required"),
  password: yup.string().min(6).required("Required"),
});

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    setShowPassword(!showPassword);
  };

  const initialValues = {
    name: "",
    password: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    const userData = {
      ...values,
    };
    console.log("userData: ", userData);
    resetForm();
  };
  return (
    <>
      <LoginTitle>Log In</LoginTitle>
      <LoginDescr>
        Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher.
      </LoginDescr>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <StyledForm>
          <FieldErrorStyled component="p" name="name" />
          <StyledField
            type="text"
            name="name"
            autoComplete="on"
            placeholder="Name"
          />

          <FieldErrorStyled component="p" name="password" />
          <EyeBtnStyled type="button" onClick={handleClick}>
            {showPassword ? <FiEye /> : <FiEyeOff />}
          </EyeBtnStyled>
          <StyledField
            type={showPassword ? "text" : "password"}
            name="password"
            autoComplete="current-password"
            placeholder="Password"
          />

          <StyledButton type="submit">Sign Up</StyledButton>
        </StyledForm>
      </Formik>
    </>
  );
};
