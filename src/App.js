import Header from "Components/Header/Header";
import GlobalState from "global/GlobalState";
import Details from "pages/DetailsPage/Details";
import Home from "pages/Home/Home";
import SearchPage from "pages/SearchPage/SearchPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "styles/ColorTheme";
import GlobalStyles from "styles/Global";

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
