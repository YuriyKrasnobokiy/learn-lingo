import styled from "styled-components";

export const MoreInfoWrap = styled.div`
  max-width: 964px;
`;

export const MoreInfoText = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 32px;
`;

export const ReviewsList = styled.ul`
  margin-bottom: 32px;
`;

export const ReviewWrap = styled.li`
  &:not(:last-child) {
    margin-bottom: 32px;
  }
`;

export const ReviewerInfoWrap = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

export const ReviewAvatar = styled.div`
  font-size: 44px;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  background-color: transparent;
  margin-right: 12px;
`;

export const ReviewerName = styled.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #8a8a89;
`;

export const ReviewRatingWrap = styled.div`
  display: flex;
`;

export const ReviewRating = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28;
  margin-left: 8px;
`;

export const ReviewComment = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
`;

export const TrialLessonBtn = styled.button`
  margin: 0;
  margin-top: 32px;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.55;
  border-radius: 12px;
  padding: 16px 48px;
  background-color: ${(props) => props.theme.colors.trialLessonBtnBGC};
  transition: background-color 0.3s linear;

  &:hover {
    background-color: ${(props) => props.theme.colors.trialLessonBtnBGHover};
  }
`;
