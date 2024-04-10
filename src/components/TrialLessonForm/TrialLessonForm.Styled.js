import { ErrorMessage, Form } from "formik";
import styled from "styled-components";

export const TrialFormTitle = styled.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.33;
  margin-bottom: 20px;
`;

export const TrialForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const RadioBtnsWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

export const RadioInputLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 1.37;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const RadioInput = styled.input`
  margin: 0;
  margin-right: 8px;
  width: 24px;
  height: 24px;
`;

export const TextInputWrapper = styled.div`
  max-width: 438px;
  margin-bottom: 40px;
`;

export const TextInput = styled.input`
  font-size: 16px;
  line-height: 1.375;
  width: 100%;
  max-width: 400px;
  border: ${(props) => props.theme.colors.trialLessonTextInputBorder};
  border-radius: 12px;
  padding: 16px 18px;
  color: ${(props) => props.theme.colors.modalTrialTextInputColor};

  &::placeholder {
    color: ${(props) => props.theme.colors.modalTrialTextInputColor};
  }

  &:not(:last-child) {
    margin-bottom: 18px;
  }
`;

export const TrialLessonBtnStyled = styled.button`
  margin: 0;
  width: 100%;
  border-radius: 12px;
  padding: 16px;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.55;
  color: ${(props) => props.theme.colors.modalTrialLessonBtnColor};
  background-color: ${(props) => props.theme.colors.modalTrialLessonBtnBGC};

  &:hover {
    background-color: ${(props) =>
      props.theme.colors.modalTrialLessonBtnBGHover};
  }
`;

export const TrialLessonErrorMessageStyled = styled(ErrorMessage)`
  color: ${(props) => props.theme.colors.ErrorMessageColor};
`;
