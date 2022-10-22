import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  * {
    margin:0 ;
    padding:0 ;
    box-sizing: border-box;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif ;
  }
 body  {
    background: ${({ theme }) => theme.colors.body};
   
    font-size: 1.15em;
    margin: 0;

  }
  a{
    text-decoration: none;
    color: #000
  }


`;

export default GlobalStyles;
