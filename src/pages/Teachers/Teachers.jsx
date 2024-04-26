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
import {
  selectFilterLevel,
  selectFilterPrice,
  selectFilterWord,
} from "../../redux/filters/filtersSelectors";
import empty from "../../assets/empty-favorite.svg";
import {
  EmptyFavoriteWrap,
  FavoriteEmptyImg,
  FavoriteEmptyText,
} from "../Favorites/Favorites.Styled";

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);
  const [visibleTeachers, setVisibleTeachers] = useState([]);
  const [count, setCount] = useState(4);
  const filterWord = useSelector(selectFilterWord);
  const filterPrice = useSelector(selectFilterPrice);
  const filterLevel = useSelector(selectFilterLevel);
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

  const filteredTeachers = visibleTeachers.filter((teacher) => {
    const languageMatch = filterWord
      ? teacher.languages.some((language) =>
          language.toLowerCase().includes(filterWord.toLowerCase()),
        )
      : true;

    const priceMatch = filterPrice
      ? teacher.price_per_hour === parseFloat(filterPrice)
      : true;

    const levelMatch = filterLevel
      ? teacher.levels.some((level) => level.includes(filterLevel))
      : true;

    return languageMatch && priceMatch && levelMatch;
  });

  // const filteredTeachers = visibleTeachers.filter((teacher) =>
  //   filterWord
  //     ? teacher.languages.some((language) =>
  //         language.toLowerCase().includes(filterWord.toLowerCase()),
  //       )
  //     : teachers,
  // );

  return (
    <>
      <TeachersWrap>
        <TeachersListWrap>
          <Filters teachers={teachers} />
          {filteredTeachers.length > 0 ? (
            <TeachersList>
              {filteredTeachers.map((teacher) => (
                <TeacherCard key={teacher.id} teacher={teacher} />
              ))}
            </TeachersList>
          ) : (
            <EmptyFavoriteWrap>
              <FavoriteEmptyText>
                Oops! No teachers matching your request....
              </FavoriteEmptyText>
              <FavoriteEmptyImg src={empty} alt="empty" />
            </EmptyFavoriteWrap>
          )}
          {count <= visibleTeachers.length && filteredTeachers.length > 0 && (
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
