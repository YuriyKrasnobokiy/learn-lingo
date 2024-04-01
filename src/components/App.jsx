import { Suspense, lazy, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Loader } from "./Loader/Loader";
import Layout from "./Layout/Layout";
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
      HomeTextBlkBGC: "#f8f8f8",
      HomeImgBlkBGC: "#fbe9ba",
      StatsDescrColor: "rgba(18, 20, 23, 0.7)",
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
