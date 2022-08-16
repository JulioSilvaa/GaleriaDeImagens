import styled from "styled-components";

export const CHeader = styled.div`
  padding: 20px;
  background-color: ${({ bg }) => bg};
  display: flex;
  flex-wrap: wrap;
  position: sticky;
  top: 0;
  z-index: 999;
  transition: all ease 0.5s;
  opacity: 0.8;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 2.0em;
  text-shadow: 0 1px 0 rgba(255, 255, 255);
`;

export const ContainerSearch = styled.div`
  display: flex;
  width: 30%;
  justify-content: center;
  align-items: center;
  box-shadow: 8px 5px 5px black;
  background-color: #fff;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }

  form {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;

    input {
      outline: transparent;
      padding-left: 10px;
      width: 100%;
      height: 40px;
      border: none;
      font-size: 1em;
      letter-spacing: 2px;
    }

    button {
      background: none;
      border: none;
      font-size: 1.5em;
      padding-right: 10px;
      cursor: pointer;
      display: block;
    }
  }
`;
