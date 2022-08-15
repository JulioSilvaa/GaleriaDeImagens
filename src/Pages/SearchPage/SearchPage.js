import React from "react";
import GlobalContext from "../../Global/GlobalContext";
import Container from "../../Styles/Container";
import CardImage from "../../Components/CardImage/CardImage";

function SearchPage() {
  const { filteredImages } = React.useContext(GlobalContext);

  const searchImages = filteredImages?.map((photo) => (
    <CardImage key={photo.id} photos={photo} />
  ));
  return (
    <div>
      <Container>{searchImages}</Container>
    </div>
  );
}

export default SearchPage;
