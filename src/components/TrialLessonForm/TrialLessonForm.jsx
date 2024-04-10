import React from "react";
import { ErrorMessage, Formik } from "formik";
import {
  RadioBtnsWrap,
  RadioInput,
  RadioInputLabel,
  TextInput,
  TextInputWrapper,
  TrialForm,
  TrialFormTitle,
  TrialLessonBtnStyled,
  TrialLessonErrorMessageStyled,
} from "./TrialLessonForm.Styled";
import * as yup from "yup";

const schema = yup.object().shape({
  option: yup.string().required("Please select an option"),
  name: yup.string().min(2).required("Required"),
  email: yup.string().email("Invalid email").required("Required"),
  phone: yup.string().min(10, "Invalid phone number").required("Required"),
});

export const TrialLessonForm = ({ openModal }) => {
  const initialValues = {
    option: "",
    name: "",
    email: "",
    phone: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form values: ", values);
    resetForm();
    openModal();
  };

  return (
    <>
      <TrialFormTitle>
        What is your main reason for learning English?
      </TrialFormTitle>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <TrialForm>
          <RadioBtnsWrap>
            <TrialLessonErrorMessageStyled component="p" name="option" />
            <RadioInputLabel>
              <RadioInput
                type="radio"
                name="option"
                value="Career and business"
              />
              Career and business
            </RadioInputLabel>
            <RadioInputLabel>
              <RadioInput type="radio" name="option" value="Lesson for kids" />
              Lesson for kids
            </RadioInputLabel>
            <RadioInputLabel>
              <RadioInput type="radio" name="option" value="Living abroad" />
              Living abroad
            </RadioInputLabel>
            <RadioInputLabel>
              <RadioInput
                type="radio"
                name="option"
                value="Exams and coursework"
              />
              Exams and coursework
            </RadioInputLabel>
            <RadioInputLabel>
              <RadioInput
                type="radio"
                name="option"
                value="Culture, travel or hobby"
              />
              Culture, travel or hobby
            </RadioInputLabel>
          </RadioBtnsWrap>

          <TextInputWrapper>
            <TrialLessonErrorMessageStyled component="p" name="name" />
            <TextInput type="text" name="name" placeholder="Full Name" />
            <TrialLessonErrorMessageStyled component="p" name="email" />
            <TextInput type="email" name="email" placeholder="Email" />
            <TrialLessonErrorMessageStyled component="p" name="phone" />
            <TextInput type="tel" name="phone" placeholder="Phone number" />
          </TextInputWrapper>

          <TrialLessonBtnStyled type="submit">Book</TrialLessonBtnStyled>
        </TrialForm>
      </Formik>
    </>
  );
};
