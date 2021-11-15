import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300&display=swap');

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  
  body {
    background: ${({ theme }) => theme.colors.body};
    font-family: 'roboto';
    color: hsl(192,100%,9%);
    font-size: 1.15rem;
    margin: 0;
  }

  p {
    opacity: 0.6;
    line-height: 1.5;
  }

  img{
    max-width: 100%;
  }

`
