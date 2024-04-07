import styled from "styled-components";

export const TeachersWrap = styled.div`
  display: flex;
  max-width: 1312px;
  flex-direction: column;
  padding: 96px 0;
  align-items: center;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.teachersBGColor};
`;

export const TeacherCard = styled.li`
  max-width: 1136px;
  display: flex;
  border-radius: 24px;
  padding: 24px;
  background-color: ${(props) => props.theme.colors.teacherCardBGC};
  &:not(:last-child) {
    margin-bottom: 32px;
  }
`;

// -------------AVATAR---------- //

export const AvatartWrap = styled.div`
  position: relative;
  margin-right: 48px;
`;

export const AvatarStyled = styled.img`
  width: 96px;
  border-radius: 100%;
  border: 3px solid ${(props) => props.theme.colors.thirdAccentColor};
  padding: 12px;
`;

export const AvatarOnLine = styled.img`
  top: 20px;
  left: 86px;
  position: absolute;
`;

// -------------STATS---------- //

export const PreTitle = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${(props) => props.theme.colors.teacherPretitleColor};
  margin-right: 178px;
`;

export const TeacherStatsWrap = styled.div`
  display: flex;
  margin-bottom: 8px;
  align-items: center;
`;

export const TeacherStatsList = styled.ul`
  display: flex;
  margin-right: 64px;
`;

export const TeachersStatsLink = styled.li`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;

  &:not(:last-child) {
    padding-right: 16px;
    margin-right: 16px;
    border-right: 1px solid
      ${(props) => props.theme.colors.teachersLiBorderColor};
  }
`;

export const StatsLiWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const StatsLiImg = styled.img`
  margin-right: 12px;
`;

export const TeacherPrice = styled.span`
  color: ${(props) => props.theme.colors.teacherPriceColor};
`;

export const TeacherHeartButton = styled.button`
  font-size: 26px;
  background-color: transparent;
  color: currentColor;
  transition: color 0.3s linear;

  &:hover {
    color: ${(props) => props.theme.colors.teacherHeartHoverColor};
  }
`;

// -------------TITLE---------- //

export const TeacherTitle = styled.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 1;
  color: ${(props) => props.theme.colors.textColor};
  margin-bottom: 32px;
`;

// -------------TEACHER-INFO-LIST---------- //

export const TeacherInfoList = styled.ul`
  margin-bottom: 16px;
`;

export const TeacherInfoLi = styled.li`
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const InfoText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
`;

export const InfoTextLangs = styled.span`
  text-decoration: underline;
`;

export const InfoTextAccent = styled.span`
  color: ${(props) => props.theme.colors.teacherInfoTextAccent};
`;

export const ReadMoreBtn = styled.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  text-decoration: underline;
  margin: 0;
  background-color: transparent;
  transition: color 0.3s linear;
  margin-bottom: 32px;
  color: ${(props) => props.theme.colors.textColor};

  &:hover {
    color: ${(props) => props.theme.colors.secondAccentColor};
  }
`;

// -------------TEACHER-LEVELS-LIST---------- //

export const LevelsList = styled.ul`
  display: flex;
`;

export const LevelsListItem = styled.li`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.14;
  border-radius: 35px;
  padding: 8px 12px;
  border: ${(props) => props.theme.colors.levelsListItemBorder};

  &:not(:last-child) {
    margin-right: 8px;
  }

  &:first-child {
    background-color: ${(props) => props.theme.colors.levelsListItemBGC};
  }
`;

// -------------LOAD-MORE-BTN---------- //

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
  margin-top: 64px;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondAccentColor};
  }
`;
