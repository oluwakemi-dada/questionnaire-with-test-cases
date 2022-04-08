import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  body: '#fff',
  fontColor: '#000',
};

export const darkTheme = {
  body: '#0b0b0c',
  fontColor: '#fff',
};

export const GlobalStyles = createGlobalStyle`
  body {
    background-color:${(props) => props.theme.body} ;
    color:${(props) => props.theme.fontColor} ;
  }
`;
