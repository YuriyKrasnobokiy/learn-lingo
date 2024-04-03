import { Formik } from "formik";
import * as yup from "yup";
import {
  EyeBtnStyled,
  FieldErrorStyled,
  StyledButton,
  StyledField,
  StyledForm,
} from "./RegisterForm.Styled";
import { FiEye } from "react-icons/fi";
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
          <EyeBtnStyled type="button">
            <FiEye />
          </EyeBtnStyled>
          <StyledField
            type="password"
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
