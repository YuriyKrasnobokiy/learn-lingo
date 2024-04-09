import styled from "styled-components";

export const TrialLessonTitle = styled.h2`
  font-weight: 500;
  font-size: 40px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-bottom: 20px;
`;

export const TrialLessonDescr = styled.p`
  font-size: 16px;
  line-height: 1.37;
  color: ${(props) => props.theme.colors.trialLessonDescrColor};
  margin-bottom: 20px;
`;

export const TeacherNameWrap = styled.div`
  display: flex;
  margin-bottom: 40px;
`;

export const TeacherAvatar = styled.img`
  border-radius: 50%;
  height: 44px;
  width: 44px;
  margin-right: 14px;
`;

export const TeacherNameText = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  color: ${(props) => props.theme.colors.teacherNameTextColor};
  margin-bottom: 4px;
`;

export const TeacherName = styled.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
`;
