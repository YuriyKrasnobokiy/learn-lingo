import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { db } from "../../components/firebase";
import { Loader } from "../../components/Loader/Loader";
import {
  AvatarStyled,
  AvatartOnLine,
  AvatartWrap,
  LoadMoreBtn,
  TeacherCard,
  TeachersWrap,
} from "./Teachers.styled";
import OnlineIcon from "../../assets/icons/online.svg";

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);
  const [visibleTeachers, setVisibleTeachers] = useState([]);
  const [count, setCount] = useState(4);

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
    setCount((prevCount) => prevCount + 4);
  };

  return (
    <TeachersWrap>
      <ul>
        {visibleTeachers.map((teacher) => (
          <TeacherCard key={nanoid()}>
            <AvatartWrap>
              <AvatarStyled src={teacher.avatar_url} alt="avatar" />
              <AvatartOnLine src={OnlineIcon} alt="online" />
            </AvatartWrap>
            <h2>
              {teacher.name} {teacher.surname}
            </h2>
            <ul>
              {teacher.languages.map((lang) => (
                <li key={nanoid()}>{lang}</li>
              ))}
            </ul>
          </TeacherCard>
        ))}
      </ul>
      {count <= visibleTeachers.length && (
        <LoadMoreBtn type="button" onClick={handleLoadMore}>
          Load More
        </LoadMoreBtn>
      )}
    </TeachersWrap>
  );
};

export default Teachers;
