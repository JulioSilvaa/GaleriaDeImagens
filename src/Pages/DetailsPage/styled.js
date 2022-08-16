import styled from "styled-components";

export const ContainerImgDetails = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  h2 {
    margin-top: 30px;
  }

  img {
    width: 70%;
    object-fit: cover;
    margin-bottom: 40px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

export default ContainerImgDetails;
