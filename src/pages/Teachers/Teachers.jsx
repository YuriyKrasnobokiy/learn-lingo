import { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import {
  LoadMoreBtn,
  TeachersList,
  TeachersListWrap,
  TeachersWrap,
} from "./Teachers.styled";
import { TeacherCard } from "../../components/TeacherCard/TeacherCard";
import { db } from "../../firebase";
import { Filters } from "../../components/Filters/Filters";
import { useSelector } from "react-redux";
import { selectFilterWord } from "../../redux/filters/filtersSelectors";

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);
  const [visibleTeachers, setVisibleTeachers] = useState([]);
  const [count, setCount] = useState(4);
  const filterWord = useSelector(selectFilterWord);
  const teachersPerPage = 4;

  useEffect(() => {
    const dbRef = ref(db);
    const dataFetch = onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
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

  const filteredTeachers = visibleTeachers.filter((teacher) =>
    filterWord
      ? teacher.languages.some((language) =>
          language.toLowerCase().includes(filterWord.toLowerCase()),
        )
      : true,
  );

  return (
    <>
      <TeachersWrap>
        <TeachersListWrap>
          <Filters />
          <TeachersList>
            {filteredTeachers.map((teacher) => (
              <TeacherCard key={teacher.id} teacher={teacher} />
            ))}
          </TeachersList>
          {count <= visibleTeachers.length && (
            <LoadMoreBtn type="button" onClick={handleLoadMore}>
              Load More
            </LoadMoreBtn>
          )}
        </TeachersListWrap>
      </TeachersWrap>
    </>
  );
};

export default Teachers;
