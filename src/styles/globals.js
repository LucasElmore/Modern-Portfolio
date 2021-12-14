import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${props => props.theme.colors.background1};
    color: ${props => props.theme.colors.primary1};
    cursor: default;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
    font-family: ${props => props.theme.fonts.main};
  }
  li{
    list-style: none;
  }
  body::-webkit-scrollbar {
    width: 1em;
  }
   
  body::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(100, 100, 100, 0);
  }
   
  body::-webkit-scrollbar-thumb {
    background: linear-gradient(200deg, #13ADC7 0%, #945DD6 100%);
    outline: 1px solid #000;
    border-radius: 100px;
  }
`;

export default GlobalStyles;