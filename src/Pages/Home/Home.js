import CardImage from "Components/CardImage/CardImage";
import useFetch from "hooks/useFetch";
import { useCallback, useEffect, useState } from "react";
import Container from "styles/Container";

function Home() {
  const [currentPage, setCurrentPage] = useState(1);

  const { get, fetchOptions } = useFetch();

  const fetchGetPhotos = useCallback(async () => {
    const maxResultsPerPage = 30;

    const fetchParams = {
      url: `/curated?page=${currentPage}&per_page=${maxResultsPerPage}`,
    };
    await get(fetchParams);
  }, [get]);

  useEffect(() => {
    fetchGetPhotos();
  }, [currentPage, fetchGetPhotos]);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setCurrentPage((currentPageInsideState) => currentPageInsideState + 1);
      }
    });
    intersectionObserver.observe(document.querySelector("#intersection"));
    return () => intersectionObserver.disconnect();
  }, []);

  const images =
    !fetchOptions.loading &&
    fetchOptions.data.photos?.map((photo) => (
      <CardImage key={photo.id} photos={photo} />
    ));

  return (
    <>
      <Container style={{ textAlign: "center" }}>{images}</Container>
      <div id="intersection" />
    </>
  );
}

export default Home;
