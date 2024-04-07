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
  const [isLoading, setIsLoading] = useState(false);
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
      setIsLoading(false);
    };
  }, []);

  return (
    <TeachersWrap>
      <ul>
        {teachers.slice(0, 4).map((teacher) => (
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
      <LoadMoreBtn type="button">Load More</LoadMoreBtn>
    </TeachersWrap>
  );
};

export default Teachers;
