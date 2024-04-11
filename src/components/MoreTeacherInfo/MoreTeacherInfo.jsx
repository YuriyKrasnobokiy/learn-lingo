import React, { useState } from "react";
import {
  MoreInfoText,
  MoreInfoWrap,
  ReviewAvatar,
  ReviewComment,
  ReviewRating,
  ReviewRatingWrap,
  ReviewWrap,
  ReviewerInfoWrap,
  ReviewerName,
  ReviewsList,
  TrialLessonBtn,
} from "./MoreTeacherInfo.Styled";
import { nanoid } from "nanoid";
import { RxAvatar } from "react-icons/rx";
import StarIcon from "../../assets/icons/star.svg";
import { LevelsList } from "../LevelsList/LevelsList";
import { Modal } from "../Modal/Modal";
import { TrialLesson } from "../TrialLesson/TrialLesson";

export const MoreTeacherInfo = ({ teacher }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal((prevState) => !prevState);
  };

  return (
    <>
      <MoreInfoWrap>
        <MoreInfoText>{teacher.experience}</MoreInfoText>
        <ReviewsList>
          {teacher.reviews.map((review) => (
            <ReviewWrap key={nanoid()}>
              <ReviewerInfoWrap>
                <ReviewAvatar>
                  <RxAvatar />
                </ReviewAvatar>
                <div>
                  <ReviewerName>{review.reviewer_name}</ReviewerName>

                  <ReviewRatingWrap>
                    <img src={StarIcon} alt="star" />
                    <ReviewRating>
                      {review.reviewer_rating.toFixed(1)}
                    </ReviewRating>
                  </ReviewRatingWrap>
                </div>
              </ReviewerInfoWrap>
              <ReviewComment>{review.comment}</ReviewComment>
            </ReviewWrap>
          ))}
        </ReviewsList>
        <LevelsList teacher={teacher} />
        <TrialLessonBtn type="button" onClick={openModal}>
          Book trial lesson
        </TrialLessonBtn>
        {isOpenModal && (
          <Modal openModal={openModal}>
            <TrialLesson teacher={teacher} openModal={openModal} />
          </Modal>
        )}
      </MoreInfoWrap>
    </>
  );
};
