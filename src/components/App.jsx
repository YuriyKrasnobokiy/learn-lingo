import { Suspense, lazy, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Loader } from "./Loader/Loader";
import { Layout } from "../components/Layout/Layout";
import GlobalStyles from "../GlobalStyles";
import { ThemeProvider } from "styled-components";

const Home = lazy(() => import("../pages/Home/Home"));
const Teachers = lazy(() => import("../pages/Teachers/Teachers"));

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
            {/* <Route path="/products/:productId/*" element={<ProductDetails />} /> */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </Layout>
    </ThemeProvider>
  );
};
