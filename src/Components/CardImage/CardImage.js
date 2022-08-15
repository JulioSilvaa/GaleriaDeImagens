/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import ContainerImages from "./styled";

// eslint-disable-next-line react/prop-types
export default function CardImage({ photos }) {
  return (
    <Link to={`/detalhes/${photos.id}`}>
      <ContainerImages>
        <img src={photos.src.medium} alt={photos.photographer} />
      </ContainerImages>
    </Link>
  );
}
