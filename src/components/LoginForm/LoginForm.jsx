import { Formik } from "formik";
import * as yup from "yup";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
import {
  ErrorMessageStyled,
  EyeBtnStyled,
  FieldErrorStyled,
  LoginDescr,
  LoginTitle,
  StyledButton,
  StyledField,
  StyledForm,
} from "./LoginForm.Styled";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Required"),
  password: yup.string().min(6).required("Required"),
});

export const LoginForm = ({ openModal }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  // const dispatch = useDispatch();
  // const loginedUsers = useSelector(selectLoginedUsers);

  const handleClick = () => {
    setShowPassword(!showPassword);
  };

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form values: ", values);

    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User logined: ", user);
        // dispatch(addToLoginedUser(user.uid));
        // console.log(loginedUsers);

        resetForm();
        openModal();
      })
      .catch((error) => {
        console.log(error);
        setError("Sorry, couldn't find your account. Please try again");
      });
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
      {error && <ErrorMessageStyled>{error}</ErrorMessageStyled>}
    </>
  );
};
