import styled from "styled-components";

export const TeachersWrap = styled.div`
  display: flex;
  max-width: 1312px;
  flex-direction: column;
  padding: 96px 0;
  /* align-items: center; */
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.teachersBGColor};
`;

export const TeachersList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoadMoreBtn = styled.button`
  /* margin: 0; */
  padding: 16px 48px;
  border-radius: 12px;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.55;
  color: ${(props) => props.theme.colors.teachersButtonColor};
  background-color: ${(props) => props.theme.colors.accentColor};
  transition: background-color 0.3s linear;
  margin-top: 64px;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondAccentColor};
  }
`;
