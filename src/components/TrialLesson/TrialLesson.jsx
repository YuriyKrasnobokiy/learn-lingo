import React from "react";
import {
  TeacherAvatar,
  TeacherName,
  TeacherNameText,
  TeacherNameWrap,
  TrialLessonDescr,
  TrialLessonTitle,
} from "./TrialLesson.styled";
import { TrialLessonForm } from "../TrialLessonForm/TrialLessonForm";

export const TrialLesson = ({ teacher, openModal }) => {
  return (
    <>
      <TrialLessonTitle>Book trial lesson</TrialLessonTitle>
      <TrialLessonDescr>
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </TrialLessonDescr>
      <TeacherNameWrap>
        <TeacherAvatar src={teacher.avatar_url} alt="avatar" />
        <div>
          <TeacherNameText>Your teacher</TeacherNameText>
          <TeacherName>
            {teacher.name} {teacher.surname}
          </TeacherName>
        </div>
      </TeacherNameWrap>
      <TrialLessonForm openModal={openModal} />
    </>
  );
};
