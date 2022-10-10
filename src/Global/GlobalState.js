/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import axios from "axios";
import React from "react";
import { APIKey, baseURL } from "../Constants/BaseURL";
import GlobalContext from "./GlobalContext";

function GlobalState(props) {
  const [filteredImages, setFilteredImages] = React.useState([]);
  const [inputSearch, setInputSearch] = React.useState("");

  const filterImage = () => {
    axios
      .get(`${baseURL}search?query=${inputSearch}&locale=pt-BR&per_page=40`, {
        headers: {
          authorization: APIKey,
        },
      })
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
