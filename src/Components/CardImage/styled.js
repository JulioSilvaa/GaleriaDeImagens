import styled from "styled-components";

const ContainerImages = styled.div`
  display: inline-block;
  margin: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  img {
    width: 100%;
    object-fit: cover;
    transform: scale(0.94);
    transition: all ease 0.3s;
    cursor: pointer;
    :hover {
      transform: scale(1);
    }
  }
`;
export default ContainerImages;
