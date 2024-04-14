import { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { LoadMoreBtn, TeachersWrap } from "./Teachers.styled";
import { TeacherCard } from "../../components/TeacherCard/TeacherCard";
import { db } from "../../firebase";

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
            <TeacherCard key={teacher.id} teacher={teacher} />
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
