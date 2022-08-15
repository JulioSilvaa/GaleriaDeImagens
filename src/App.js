import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import GlobalStyles from "./Styles/Global";
import theme from "./Styles/ColorTheme";
import Header from "./Components/Header/Header";
import Details from "./Pages/DetailsPage/Details";
import GlobalState from "./Global/GlobalState";
import SearchPage from "./Pages/SearchPage/SearchPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalState>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detalhes/:id" element={<Details />} />
            <Route path="/pesquisa" element={<SearchPage />} />
          </Routes>
        </BrowserRouter>
        <GlobalStyles />
      </GlobalState>
    </ThemeProvider>
  );
}

export default App;
