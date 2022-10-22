/* eslint-disable no-unused-expressions */
import { useContext, useEffect, useState } from "react";
import { FcSearch } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import Container from "styles/Container";
import Flex from "styles/Flex";
import GlobalContext from "../../global/GlobalContext";
import * as S from "./styled";

function Header() {
  const [blackHeader, setBlackHeader] = useState(false);
  const { setInputSearch, inputSearch, filterImage } =
    useContext(GlobalContext);
  const navigate = useNavigate();

  useEffect(() => {
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
    <S.CHeader bg={blackHeader ? "#02c5f5" : "#02c5f5"}>
      <Container>
        <Flex>
          <S.Title>
            <Link to="/">UPfront Fotos</Link>
          </S.Title>
          <S.ContainerSearch>
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
          </S.ContainerSearch>
        </Flex>
      </Container>
    </S.CHeader>
  );
}

export default Header;
