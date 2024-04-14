import { Formik } from "formik";
import * as yup from "yup";
import {
  EyeBtnStyled,
  FieldErrorStyled,
  RegistrDescr,
  RegistrTitle,
  StyledButton,
  StyledField,
  StyledForm,
} from "./RegisterForm.Styled";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const schema = yup.object().shape({
  name: yup.string().min(2).required("Required"),
  email: yup.string().email("Invalid email").required("Required"),
  password: yup.string().min(6).required("Required"),
});

export const RegisterForm = ({ openModal }) => {
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
    console.log("Form values: ", values);

    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User registered: ", user);
        resetForm();
        openModal();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Registration error:", errorCode, errorMessage);
      });
  };

  return (
    <>
      <RegistrTitle>Registration</RegistrTitle>
      <RegistrDescr>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information
      </RegistrDescr>
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
            autoComplete="email"
            placeholder="Email"
          />

          <FieldErrorStyled component="p" name="password" />
          <EyeBtnStyled type="button" onClick={handleClick}>
            {showPassword ? <FiEye /> : <FiEyeOff />}
          </EyeBtnStyled>
          <StyledField
            type={showPassword ? "text" : "password"}
            name="password"
            autoComplete="new-password"
            placeholder="Password"
          />

          <StyledButton type="submit">Sign Up</StyledButton>
        </StyledForm>
      </Formik>
    </>
  );
};
