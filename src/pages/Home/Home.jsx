import React from "react";
import {
  HomeImgBlock,
  HomeTextBlock,
  StatsBlock,
  StatsDescr,
  StatsLi,
  StatsList,
  StatsNumber,
  TextBlockBtn,
  TextBlockDescr,
  TextBlockTitle,
  TitleAccentText,
  Wrapper,
} from "./Home.styled";
import smile from "../../assets/icons/smile.svg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate("/teachers");
  };

  return (
    <div className="container">
      <Wrapper>
        <HomeTextBlock>
          <TextBlockTitle>
            Unlock your potential with the best{" "}
            <TitleAccentText>
              <i>language</i>
            </TitleAccentText>{" "}
            tutors
          </TextBlockTitle>
          <TextBlockDescr>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </TextBlockDescr>
          <TextBlockBtn type="button" onClick={handleStartClick}>
            Get started
          </TextBlockBtn>
        </HomeTextBlock>
        <HomeImgBlock>
          <img src={smile} alt="smilling girl" />
        </HomeImgBlock>
      </Wrapper>
      <StatsBlock>
        <StatsList>
          <StatsLi>
            <StatsNumber>32,000 + </StatsNumber>
            <StatsDescr>Experienced tutors</StatsDescr>
          </StatsLi>
          <StatsLi>
            <StatsNumber>300,000 + </StatsNumber>
            <StatsDescr>5-star tutor reviews</StatsDescr>
          </StatsLi>
          <StatsLi>
            <StatsNumber>120 + </StatsNumber>
            <StatsDescr>Subjects taught</StatsDescr>
          </StatsLi>
          <StatsLi>
            <StatsNumber>200 + </StatsNumber>
            <StatsDescr>Tutor nationalities</StatsDescr>
          </StatsLi>
        </StatsList>
      </StatsBlock>
    </div>
  );
};

export default Home;
