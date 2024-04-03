import { ErrorMessage, Field, Form } from "formik";
import styled from "styled-components";

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
