import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * { 
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Nanum Pen Script';
    background-color: #f6f6f6;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
  #root {
    background-color: white;
    box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
  }
  .App {
    min-height: 100vh;
    padding-left: 20px;
    padding-right: 20px;
    @media screen and (min-width: 650px) {
      width: 640px;
    }
    @media screen and (max-width: 650px) {
      width: 90vw;
    }
  }
`;

export default GlobalStyle;