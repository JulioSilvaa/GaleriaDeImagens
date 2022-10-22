/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import { useState } from "react";
import pexelsApi from "services/pexelsAPI";
import GlobalContext from "./GlobalContext";

function GlobalState(props) {
  const [filteredImages, setFilteredImages] = useState([]);
  const [inputSearch, setInputSearch] = useState("");

  const filterImage = () => {
    pexelsApi
      .get(`/search?query=${inputSearch}&locale=pt-BR&per_page=40`)
      .then((res) => {
        setFilteredImages(res.data.photos);
        setInputSearch("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const data = {
    filteredImages,
    inputSearch,
    filterImage,
    setInputSearch,
  };

  return (
    <GlobalContext.Provider value={data}>
      {props.children}
    </GlobalContext.Provider>
  );
}

export default GlobalState;
