import { Formik } from "formik";
import * as yup from "yup";
import {
  EyeBtnStyled,
  FieldErrorStyled,
  StyledButton,
  StyledField,
  StyledForm,
} from "./RegisterForm.Styled";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";
{
  /* <FiEyeOff /> */
}
{
  /* <FiEye /> */
}
const schema = yup.object().shape({
  name: yup.string().min(2).required("Required"),
  email: yup.string().email("Invalid email").required("Required"),
  password: yup.string().min(6).required("Required"),
});

export const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    setShowPassword(!showPassword);
  };

  const initialValues = {
    name: "",
    email: "",
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

          <FieldErrorStyled component="p" name="email" />
          <StyledField
            type="email"
            name="email"
            autoComplete="current-email"
            placeholder="Email"
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
