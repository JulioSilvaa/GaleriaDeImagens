import React from "react";
import { useParams } from "react-router-dom";
import pexelsApi from "services/pexelsAPI";
import Container from "styles/Container";
import { ContainerImgDetails } from "./styled";

function Details() {
  const [photoDetail, setPhotoDetail] = React.useState(undefined);

  const params = useParams();
  const { id } = params;

  React.useEffect(() => {
    pexelsApi
      .get(`/photos/${id}`)
      .then((res) => {
        setPhotoDetail(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    photoDetail && (
      <Container>
        <ContainerImgDetails>
          <h2>Fotografo: {photoDetail.photographer}</h2>
          <a href={photoDetail.photographer_url}>
            Veja mais trabalhos desse Fotografo:
          </a>
          <p>Todas as Fotos deste projeto pertencem a API da Pexels</p>
          <p>{photoDetail.liked}</p>

          <img
            src={photoDetail && photoDetail.src.large}
            alt={photoDetail.alt}
          />
        </ContainerImgDetails>
      </Container>
    )
  );
}

export default Details;
