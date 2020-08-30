import { createGlobalStyle } from 'styled-components';

const deviceSize = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const device = {
  mobileS: `(min-width: ${deviceSize.mobileS})`,
  mobileM: `(min-width: ${deviceSize.mobileM})`,
  mobileL: `(min-width: ${deviceSize.mobileL})`,
  tablet: `(min-width: ${deviceSize.tablet})`,
  laptop: `(min-width: ${deviceSize.laptop})`,
  laptopL: `(min-width: ${deviceSize.laptopL})`,
  desktop: `(min-width: ${deviceSize.desktop})`,
  desktopL: `(min-width: ${deviceSize.desktop})`,
};

const GlobalStyle = createGlobalStyle`

    #root, html, body {
        height: 100%;
    }
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: inherit;
        font-weight: 500;
        box-sizing: border-box;
        width: inherit;
        -webkit-appearance: none;
    }
    html {
        font-size: 62.5%;
        font-family: Ubuntu;
        scroll-behavior: smooth;
    }

    body {
        box-sizing: inherit;
        padding-bottom: 80px;
        @media (min-width: 768px) {
            background-color: #F8F8F8;
        }
        
    }
    button {
        cursor: pointer;
    }

`;

export default GlobalStyle;
