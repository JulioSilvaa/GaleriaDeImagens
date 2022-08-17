/* eslint-disable no-unused-expressions */
import React from "react";
import { FcSearch } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { CHeader, ContainerSearch, Title } from "./styled";
import Container from "../../Styles/Container";
import Flex from "../../Styles/Flex";
import GlobalContext from "../../Global/GlobalContext";

function Header() {
  const [blackHeader, setBlackHeader] = React.useState(false);
  const { setInputSearch, inputSearch, filterImage } =
    React.useContext(GlobalContext);
  const navigate = useNavigate();

  React.useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };
    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputSearch !== "" && inputSearch.length >= 3) {
      inputSearch;
      filterImage();
      navigate("/pesquisa");
    } else {
      // eslint-disable-next-line no-alert
      alert("Digite uma palavra válida...");
    }
  };

  return (
    <CHeader bg={blackHeader ? "#02c5f5" : "#02c5f5"}>
      <Container>
        <Flex>
          <Title>UPfront Fotos</Title>
          <ContainerSearch>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Buscar..."
                onChange={(e) => setInputSearch(e.target.value)}
                value={inputSearch}
              />
              <button type="submit">
                <i>
                  <FcSearch />
                </i>
              </button>
            </form>
          </ContainerSearch>
        </Flex>
      </Container>
    </CHeader>
  );
}

export default Header;
