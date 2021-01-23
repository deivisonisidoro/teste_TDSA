import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html, body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #FFFFFF;
    
  }
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body, input, button {
    font-size: 14px; 
    font-family: Roboto, sans-serif;    
  }

  button {
    cursor: pointer;
  }
`;