import React, { useState } from "react";
import {
  AvatarOnLine,
  AvatarStyled,
  AvatartWrap,
  InfoText,
  InfoTextAccent,
  InfoTextLangs,
  PreTitle,
  ReadMoreBtn,
  StatsLiImg,
  StatsLiWrap,
  TeacherCardStyled,
  TeacherHeartButton,
  TeacherInfoLi,
  TeacherInfoList,
  TeacherPrice,
  TeacherStatsList,
  TeacherStatsWrap,
  TeacherTitle,
  TeachersStatsLink,
} from "./TeacherCard.Styled";
import OnlineIcon from "../../assets/icons/online.svg";
import { LuBookOpen } from "react-icons/lu";
import StarIcon from "../../assets/icons/star.svg";
import { VscHeart } from "react-icons/vsc";
import { VscHeartFilled } from "react-icons/vsc";
import { MoreTeacherInfo } from "../../components/MoreTeacherInfo/MoreTeacherInfo";
import { LevelsList } from "../../components/LevelsList/LevelsList";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
  toggleSelectedTeacher,
} from "../../redux/teachers/teachersSlice";
import { selectToggleSelectedTeachers } from "../../redux/teachers/teachersSelectors";

export const TeacherCard = ({ teacher }) => {
  const [expandedTeacherId, setExpandedTeacherId] = useState(null);
  ////////////////////////
  const dispatch = useDispatch();

  const selectedTeachersIds = useSelector(selectToggleSelectedTeachers);
  const isFavorite = selectedTeachersIds.includes(teacher.id);

  const toggleFavorite = (teacher) => {
    if (isFavorite) {
      dispatch(removeFromFavorites(teacher));
    } else {
      dispatch(addToFavorites(teacher));
    }
    dispatch(toggleSelectedTeacher(teacher.id));
  };
  /////////////////////////////
  const handleReadMore = (teacherId) => {
    setExpandedTeacherId(teacherId === expandedTeacherId ? null : teacherId);
  };

  return (
    <>
      <TeacherCardStyled key={teacher.id}>
        <AvatartWrap>
          <AvatarStyled src={teacher.avatar_url} alt="avatar" />
          <AvatarOnLine src={OnlineIcon} alt="online" />
        </AvatartWrap>
        <div>
          <TeacherStatsWrap>
            <PreTitle>Langueges</PreTitle>

            <TeacherStatsList className="teacher-info">
              <TeachersStatsLink>
                <StatsLiWrap>
                  <LuBookOpen style={{ marginRight: "12px" }} />
                  Lessons online
                </StatsLiWrap>
              </TeachersStatsLink>
              <TeachersStatsLink>
                Lessons done: {teacher.lessons_done}
              </TeachersStatsLink>
              <TeachersStatsLink>
                <StatsLiWrap>
                  <StatsLiImg src={StarIcon} alt="star" />
                  Rating: {teacher.rating}
                </StatsLiWrap>
              </TeachersStatsLink>
              <TeachersStatsLink>
                Price / 1 hour:{" "}
                <TeacherPrice>{teacher.price_per_hour}$</TeacherPrice>
              </TeachersStatsLink>
            </TeacherStatsList>

            <TeacherHeartButton
              type="button"
              onClick={() => toggleFavorite(teacher)}
            >
              {isFavorite ? <VscHeartFilled /> : <VscHeart />}
            </TeacherHeartButton>
          </TeacherStatsWrap>

          <TeacherTitle>
            {teacher.name} {teacher.surname}
          </TeacherTitle>

          <TeacherInfoList>
            <TeacherInfoLi>
              <InfoText>
                <InfoTextAccent>Speaks: </InfoTextAccent>
                <InfoTextLangs>{teacher.languages.join(", ")}</InfoTextLangs>
              </InfoText>
            </TeacherInfoLi>
            <TeacherInfoLi>
              <InfoText>
                <InfoTextAccent>Lesson Info: </InfoTextAccent>
                {teacher.lesson_info}
              </InfoText>
            </TeacherInfoLi>
            <TeacherInfoLi>
              <InfoText>
                <InfoTextAccent>Conditions: </InfoTextAccent>
                {teacher.conditions}
              </InfoText>
            </TeacherInfoLi>
          </TeacherInfoList>
          {expandedTeacherId !== teacher.id && (
            <>
              <ReadMoreBtn
                type="button"
                onClick={() => handleReadMore(teacher.id)}
              >
                Read more
              </ReadMoreBtn>

              <LevelsList teacher={teacher} />
            </>
          )}

          {expandedTeacherId === teacher.id && (
            <MoreTeacherInfo teacher={teacher} />
          )}
        </div>
      </TeacherCardStyled>
    </>
  );
};
