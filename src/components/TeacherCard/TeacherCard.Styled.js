import styled from "styled-components";

export const TeacherCardStyled = styled.li`
  max-width: 1136px;
  display: flex;
  border-radius: 24px;
  padding: 24px;
  background-color: ${(props) => props.theme.colors.teacherCardBGC};
  &:not(:last-child) {
    margin-bottom: 32px;
  }

  @media screen and (max-width: 1023px) {
    flex-direction: column;
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
  margin-right: 176px;

  @media screen and (max-width: 1023px) {
    margin-right: 50px;
  }
`;

export const TeacherStatsWrap = styled.div`
  display: flex;
  margin-bottom: 8px;
  align-items: center;

  @media screen and (max-width: 520px) {
    flex-direction: column;
  }
`;

export const TeacherStatsList = styled.ul`
  display: flex;
  margin-right: 64px;
  flex-wrap: wrap;
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
