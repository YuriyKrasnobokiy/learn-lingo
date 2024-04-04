import { ErrorMessage, Field, Form } from "formik";
import styled from "styled-components";

export const LoginTitle = styled.h2`
  font-weight: 500;
  font-size: 40px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  text-align: start;
  margin-bottom: 20px;
  color: ${(props) => props.theme.colors.ModalTitleColor};
`;

export const LoginDescr = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.375;
  color: ${(props) => props.theme.colors.ModalDescrColor};
  margin-bottom: 40px;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const FieldErrorStyled = styled(ErrorMessage)`
  color: red;
`;

export const StyledField = styled(Field)`
  font-size: 16px;
  line-height: 1.37;
  border: 1px solid ${(props) => props.theme.colors.FormFieldBorderColor};
  border-radius: 12px;
  padding: 16px 18px;
  color: ${(props) => props.theme.colors.StyledFieldColor};
  margin-bottom: 18px;
  max-width: 400px;

  &:last-of-type {
    margin-bottom: 40px;
    position: relative;
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.StyledFieldColor};
  }
`;

export const StyledButton = styled.button`
  font-size: 18px;
  font-weight: 700;
  line-height: 1.55;
  border-radius: 12px;
  padding: 16px;
  width: 100%;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.ModalButtonBGColor};
  transition: background-color 0.3s linear;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondAccentColor};
  }
`;

export const EyeBtnStyled = styled.button`
  font-size: 18px;
  width: 20px;
  height: 20px;
  margin: 0;
  position: absolute;
  z-index: 9999;
  justify-content: center;

  right: 84px;
  bottom: 182px;
  background-color: transparent;
`;

export const ErrorMessageStyled = styled.p`
  position: absolute;
  bottom: 30px;
  font-size: 18px;
  line-height: 1.375;
  color: ${(props) => props.theme.colors.ErrorMessageColor};
`;
