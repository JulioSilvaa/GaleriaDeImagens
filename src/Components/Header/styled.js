import styled from "styled-components";

export const CHeader = styled.header`
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

  @media (max-width: ${({ theme }) => theme.mobile}) {
  
     display: block;
     
    img {
      margin-top: 20px;
    }
  }
`;

export const Title = styled.h1`
  font-size: 1.8em;
`;

export const ContainerSearch = styled.div`
  display: flex;
  width: 30%;
  justify-content: center;
  align-items: center;
  box-shadow: 8px 5px 5px black;
  background-color: #fff;

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
