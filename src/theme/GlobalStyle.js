import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    html{
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    };

    *,::after, ::before{
        box-sizing: inherit
    }
`;

export default GlobalStyle;