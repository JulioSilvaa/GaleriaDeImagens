import axios from "axios";
import React from "react";
import CardImage from "../../Components/CardImage/CardImage";
import { APIKey, baseURL } from "../../Constants/BaseURL";
import Container from "../../Styles/Container";
import Loading from "../../Styles/IsLoading";

function Home() {
  const [data, setData] = React.useState([]);
  const [isloading, setIsLoading] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);

  const getPhotos = () => {
    axios
      .get(`${baseURL}curated?page=${currentPage}&per_page=30`, {
        headers: {
          authorization: APIKey,
        },
      })
      .then((res) => {
        setData([...data, ...res.data.photos]);
        setIsLoading(false);
      })
      .catch((res) => console.log(res));
  };

  React.useEffect(() => {
    getPhotos();
    setIsLoading(true);
  }, [currentPage]);

  React.useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setCurrentPage((currentPageInsideState) => currentPageInsideState + 1);
      }
    });
    intersectionObserver.observe(document.querySelector("#intersection"));
    return () => intersectionObserver.disconnect();
  }, []);

  const images = data?.map((photo) => (
    <CardImage key={photo.id} photos={photo} />
  ));

  if (isloading) {
    <Loading>Carregando... </Loading>;
  }
  return (
    <>
      <Container style={{ textAlign: "center" }}>{images}</Container>
      <div id="intersection" />
    </>
  );
}

export default Home;
