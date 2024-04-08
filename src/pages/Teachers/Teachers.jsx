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
import { LuBookOpen } from "react-icons/lu";
import StarIcon from "../../assets/icons/star.svg";
import { VscHeart } from "react-icons/vsc";
import { MoreTeacherInfo } from "../../components/MoreTeacherInfo/MoreTeacherInfo";
import { LevelsList } from "../../components/LevelsList/LevelsList";

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);
  const [visibleTeachers, setVisibleTeachers] = useState([]);
  const [count, setCount] = useState(4);
  const [expandedTeacherId, setExpandedTeacherId] = useState(null);
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

  const handleReadMore = (teacherId) => {
    setExpandedTeacherId(teacherId === expandedTeacherId ? null : teacherId);
  };

  return (
    <>
      <TeachersWrap>
        <ul>
          {visibleTeachers.map((teacher) => (
            <TeacherCard key={teacher.id}>
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

                  <TeacherHeartButton type="button">
                    <VscHeart />
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
