import { Suspense, lazy, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Loader } from "./Loader/Loader";
import { Layout } from "../components/Layout/Layout";
import GlobalStyles from "../GlobalStyles";
import { ThemeProvider } from "styled-components";
// import PrivateRoute from "./PrivateRoute/PrivateRoute";

const Home = lazy(() => import("../pages/Home/Home"));
const Teachers = lazy(() => import("../pages/Teachers/Teachers"));
const Favorites = lazy(() => import("../pages/Favorites/Favorites"));

export const themes = {
  light: {
    colors: {
      textColor: "#121417",
      accentColor: "#f4c550",
      secondAccentColor: "#ffdc86",
      thirdAccentColor: "#fbe9ba",
      mainBgColor: "white",
      registerBtnBgColor: "#121417",
      registerBtnColor: "#fff",
      HomeTextBlkBGC: "#f8f8f8",
      HomeImgBlkBGC: "#fbe9ba",
      StatsDescrColor: "rgba(18, 20, 23, 0.7)",
      HomeAccentText: "#121417",
      ModalBgColor: "rgba(0, 0, 0, 0.5)",
      ModalTitleColor: "#121417",
      ModalDescrColor: "rgba(18, 20, 23, 0.8)",
      ModalButtonBGColor: "#f4c550",
      FormFieldBorderColor: "rgba(18, 20, 23, 0.1)",
      StyledFieldColor: "#121417",
      ErrorMessageColor: "#992211",
      teachersBGColor: "#f8f8f8",
      teacherCardBGC: "#fff",
      teacherCardBorderColor: "transparent",
      teachersButtonColor: "#121417",
      teacherPretitleColor: "#8a8a89",
      teachersLiBorderColor: "rgba(18, 20, 23, 0.2)",
      teacherPriceColor: " #38cd3e",
      teacherInfoTextAccent: "#8a8a89",
      levelsListItemBGC: "#f4c550",
      levelsListItemBorder: "1px solid rgba(18, 20, 23, 0.2)",
      teacherHeartColor: "#121417",
      teacherHeartHoverColor: "#f4c550",
      trialLessonBtnBGC: "#f4c550",
      trialLessonTeacherNameColor: "#121417",
      trialLessonTitleColor: "#121417",
      trialLessonBtnBGHover: "#ffdc86",
      trialLessonDescrColor: "rgba(18, 20, 23, 0.8)",
      teacherNameTextColor: "#8a8a89",
      trialLessonTextInputBorder: " 1px solid rgba(18, 20, 23, 0.1)",
      modalTrialLessonBtnBGC: "#f4c550",
      modalTrialLessonBtnBGHover: "#ffdc86",
      modalTrialLessonBtnColor: "#121417",
      modalTrialTextInputColor: "#121417",
      TrialFormTitleColor: "#121417",
      TrialFormRadioOptColor: "#121417",
    },
  },
  dark: {
    colors: {
      textColor: "white",
      accentColor: "#f4c550",
      secondAccentColor: "#ffdc86",
      thirdAccentColor: "#fbe9ba",
      mainBgColor: "#121417",
      registerBtnBgColor: "#ffdc86",
      HomeTextBlkBGC: "#121417",
      HomeImgBlkBGC: "#fbe9ba",
      StatsDescrColor: "#f8f8f8",
      HomeAccentText: "#121417",
      ModalBgColor: "rgba(0, 0, 0, 0.5)",
      ModalTitleColor: "#121417",
      ModalDescrColor: "rgba(18, 20, 23, 0.8)",
      ModalButtonBGColor: "#f4c550",
      FormFieldBorderColor: "rgba(18, 20, 23, 0.1)",
      StyledFieldColor: "#121417",
      ErrorMessageColor: "#992211",
      teachersBGColor: "#121417",
      teacherCardBGC: "rgba(18, 20, 23, 1)",
      teacherCardBorderColor: "#fbe9ba",
      teachersButtonColor: "#121417",
      teacherPretitleColor: "#8a8a89",
      teachersLiBorderColor: "rgba(18, 20, 23, 0.2)",
      teacherPriceColor: " #38cd3e",
      teacherInfoTextAccent: "#8a8a89",
      levelsListItemBGC: "#f4c550",
      levelsListItemBorder: "1px solid #8a8a89",
      teacherHeartColor: "#f8f8f8",
      teacherHeartHoverColor: "#f4c550",
      trialLessonTitleColor: "#121417",
      trialLessonTeacherNameColor: "#121417",
      trialLessonBtnBGC: "#f4c550",
      trialLessonBtnBGHover: "#ffdc86",
      trialLessonDescrColor: "rgba(18, 20, 23, 0.8)",
      teacherNameTextColor: "#8a8a89",
      trialLessonTextInputBorder: " 1px solid rgba(18, 20, 23, 0.1)",
      modalTrialLessonBtnBGC: "#f4c550",
      modalTrialLessonBtnBGHover: "#ffdc86",
      modalTrialLessonBtnColor: "#121417",
      modalTrialTextInputColor: "#121417",
      TrialFormTitleColor: "#121417",
      TrialFormRadioOptColor: "#121417",
    },
  },
};

export const App = () => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "dark";
  });

  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setCurrentTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <GlobalStyles />
      <Layout currentTheme={currentTheme} toggleTheme={toggleTheme}>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/teachers" element={<Teachers />}></Route>
            {/* <Route
              path="/favorites"
              element={
                <PrivateRoute>
                  <Favorites />
                </PrivateRoute>
              }
            /> */}
            <Route path="/favorites" element={<Favorites />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </Layout>
    </ThemeProvider>
  );
};
