import React, { useEffect, useState } from "react";
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
import { onAuthStateChanged } from "firebase/auth";

import toast from "react-hot-toast";
import { auth } from "../../firebase";

export const TeacherCard = ({ teacher }) => {
  const [expandedTeacherId, setExpandedTeacherId] = useState(null);
  const dispatch = useDispatch();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });

    // Відписка від слухача при розмонтуванні //
    return () => unsubscribe();
  }, []);

  const selectedTeachersIds = useSelector(selectToggleSelectedTeachers);
  const isFavorite = selectedTeachersIds.includes(teacher.id);
  const user = auth.currentUser;

  const toggleFavorite = (teacher) => {
    if (isFavorite) {
      dispatch(removeFromFavorites(teacher));
    } else {
      dispatch(addToFavorites({ ...teacher, owner: user.uid }));
    }
    dispatch(toggleSelectedTeacher(teacher.id));
  };

  const handleReadMore = (teacherId) => {
    setExpandedTeacherId(teacherId === expandedTeacherId ? null : teacherId);
  };

  const handleFavoriteClick = () => {
    if (isAuthenticated) {
      toggleFavorite(teacher);
    } else {
      toast.error("You must be logged in to add to favorites");
    }
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

            <TeacherHeartButton type="button" onClick={handleFavoriteClick}>
              {isFavorite && isAuthenticated ? (
                <VscHeartFilled />
              ) : (
                <VscHeart />
              )}
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
