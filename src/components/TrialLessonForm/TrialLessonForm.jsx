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
} from "./TrialLessonForm.Styled";
import * as yup from "yup";

const initialValues = {
  option: null,
  name: "",
  email: "",
  phone: "",
};

const schema = yup.object().shape({
  option: yup.string().nullable().required("Please select an option"),
  name: yup.string().min(2).required("Required"),
  email: yup.string().email("Invalid email").required("Required"),
  phone: yup.string().min(10, "Invalid phone number").required("Required"),
});

export const TrialLessonForm = ({ openModal }) => {
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
            <ErrorMessage component="p" name="option" />
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
            <ErrorMessage component="p" name="name" />
            <TextInput type="text" name="name" placeholder="Full Name" />
            <ErrorMessage component="p" name="email" />
            <TextInput type="email" name="email" placeholder="Email" />
            <ErrorMessage component="p" name="phone" />
            <TextInput type="tel" name="phone" placeholder="Phone number" />
          </TextInputWrapper>

          <TrialLessonBtnStyled type="submit">Book</TrialLessonBtnStyled>
        </TrialForm>
      </Formik>
    </>
  );
};
