import { createGlobalStyle } from 'styled-components';

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
        @media (min-width: 768px) {
            background-color: #F8F8F8;
        }
        
    }
    button {
        cursor: pointer;
    }

`;

export default GlobalStyle;
