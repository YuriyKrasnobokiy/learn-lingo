import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 568px;
  gap: 24px;
`;

export const HomeTextBlock = styled.div`
  padding: 98px 108px 98px 64px;
  border-radius: 30px;
  background-color: ${(props) => props.theme.colors.HomeTextBlkBGC};
`;

export const TextBlockTitle = styled.h1`
  font-weight: 500;
  font-size: 48px;
  line-height: 1.16667;
  letter-spacing: -0.02em;
  margin-bottom: 32px;
`;

export const TitleAccentText = styled.span`
  color: ${(props) => props.theme.colors.HomeAccentText};
  border-radius: 14px;
  background-color: ${(props) => props.theme.colors.thirdAccentColor};
`;

export const TextBlockDescr = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.375;
  letter-spacing: -0.02em;
  margin-bottom: 64px;
  width: 471px;
`;

export const TextBlockBtn = styled.button`
  font-weight: 700;
  font-size: 18px;
  line-height: 1.55;
  border-radius: 12px;
  padding: 16px 88px;
  margin: 0;
  color: ${(props) => props.theme.colors.textColor};
  background-color: ${(props) => props.theme.colors.accentColor};
  transition: background-color 0.3s linear;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondAccentColor};
  }
`;

export const HomeImgBlock = styled.div`
  /* width: 568px;
  height: 530px;
  border-radius: 30px;
  background-color: ${(props) => props.theme.colors.HomeImgBlkBGC}; */
`;

export const StatsBlock = styled.div`
  padding: 40px 0;
  border: 1.5px dashed ${(props) => props.theme.colors.accentColor};
  border-radius: 30px;

  margin-top: 24px;
`;

export const StatsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StatsLi = styled.li`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-right: 100px;
  }
`;

export const StatsNumber = styled.p`
  font-weight: 500;
  font-size: 28px;
  line-height: 1.14;
  letter-spacing: -0.02em;
  margin-right: 16px;
`;

export const StatsDescr = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28;
  letter-spacing: -0.02em;
  max-width: 106px;
  color: ${(props) => props.theme.colors.StatsDescrColor};
`;
