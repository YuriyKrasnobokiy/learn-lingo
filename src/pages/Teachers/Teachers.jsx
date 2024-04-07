import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { db } from "../../components/firebase";
// import { Loader } from "../../components/Loader/Loader";
import {
  AvatarOnLine,
  AvatarStyled,
  AvatartWrap,
  InfoText,
  InfoTextAccent,
  InfoTextLangs,
  LevelsList,
  LevelsListItem,
  LoadMoreBtn,
  PreTitle,
  ReadMoreBtn,
  StatsLiImg,
  StatsLiWrap,
  TeacherCard,
  TeacherHeartButton,
  TeacherInfoLi,
  TeacherInfoList,
  TeacherPrice,
  TeacherStatsList,
  TeacherStatsWrap,
  TeacherTitle,
  TeachersStatsLink,
  TeachersWrap,
} from "./Teachers.styled";
import OnlineIcon from "../../assets/icons/online.svg";
import BookIcon from "../../assets/icons/book.svg";
import StarIcon from "../../assets/icons/star.svg";
import HeartIcon from "../../assets/icons/heart.svg";

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);
  const [visibleTeachers, setVisibleTeachers] = useState([]);
  const [count, setCount] = useState(4);
  const teachersPerPage = 4;

  useEffect(() => {
    const dbRef = ref(db);
    const dataFetch = onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        console.log("Updated data:", data);
        setTeachers(Object.values(data));
      }
    });
    return () => {
      dataFetch();
    };
  }, []);

  useEffect(() => {
    setVisibleTeachers(teachers.slice(0, count));
  }, [teachers, count]);
  const handleLoadMore = () => {
    setCount((prevCount) => prevCount + teachersPerPage);
  };

  return (
    <>
      <TeachersWrap>
        <ul>
          {visibleTeachers.map((teacher) => (
            <TeacherCard key={nanoid()}>
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
                        <StatsLiImg src={BookIcon} alt="book" />
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

                  <TeacherHeartButton type="button">
                    <img src={HeartIcon} alt="heart" />
                  </TeacherHeartButton>
                </TeacherStatsWrap>

                <TeacherTitle>
                  {teacher.name} {teacher.surname}
                </TeacherTitle>

                <TeacherInfoList>
                  <TeacherInfoLi>
                    <InfoText>
                      <InfoTextAccent>Speaks: </InfoTextAccent>
                      <InfoTextLangs>
                        {teacher.languages.join(", ")}
                      </InfoTextLangs>
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
                <ReadMoreBtn type="button">Read more</ReadMoreBtn>
                <LevelsList>
                  {teacher.levels.map((level) => (
                    <LevelsListItem key={nanoid()}>#{level}</LevelsListItem>
                  ))}
                </LevelsList>
              </div>
            </TeacherCard>
          ))}
        </ul>
        {count <= visibleTeachers.length && (
          <LoadMoreBtn type="button" onClick={handleLoadMore}>
            Load More
          </LoadMoreBtn>
        )}
      </TeachersWrap>
    </>
  );
};

export default Teachers;
