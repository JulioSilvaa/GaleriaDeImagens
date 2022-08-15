/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import axios from "axios";
import GlobalContext from "./GlobalContext";
import { APIKey } from "../Constants/BaseURL";

function GlobalState(props) {
  const [filteredImages, setFilteredImages] = React.useState([]);
  const [inputSearch, setInputSearch] = React.useState("");

  const filterImage = () => {
    axios
      .get(
        `https://api.pexels.com/v1/search?query=${inputSearch}&locale=pt-BR`,
        {
          headers: {
            authorization: APIKey,
          },
        }
      )
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
