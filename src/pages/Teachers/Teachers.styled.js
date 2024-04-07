import styled from "styled-components";

export const TeachersWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.teachersBGColor};
`;

export const AvatartWrap = styled.div`
  position: relative;
`;

export const TeacherCard = styled.li`
  background-color: ${(props) => props.theme.colors.teacherCardBGC};
  border: 1px solid ${(props) => props.theme.colors.teacherCardBorderColor};
`;

export const AvatarStyled = styled.img`
  width: 96px;
  border-radius: 100%;
  border: 3px solid ${(props) => props.theme.colors.thirdAccentColor};
  padding: 12px;
`;

export const AvatartOnLine = styled.img`
  top: 20px;
  left: 86px;
  position: absolute;
`;

export const LoadMoreBtn = styled.button`
  margin: 0;
  padding: 16px 48px;
  border-radius: 12px;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.55;
  color: ${(props) => props.theme.colors.teachersButtonColor};
  background-color: ${(props) => props.theme.colors.accentColor};
  transition: background-color 0.3s linear;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondAccentColor};
  }
`;
