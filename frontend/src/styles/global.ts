import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color-light: #2AD3E1;        
    --primary-color: #00D9D0;
    --primary-color-dark: #00BAD4;
    
    --secondary-color-light: #2A3C4F;
    --secondary-color: #0A1633;
    --secondary-color-dark: #080B2D;
    
    --background: #FFFFFF;
    --shape: #EDEDED;
    
    --text-light: #F8F9F8;
    --text-dark: #0F0521;
    
    --box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.25);
    --border-radius: .25rem;
  }

  * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }


  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }


  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.8;
    cursor: not-allowed;
  }
`