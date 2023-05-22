import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html,
    body,
    #root {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }

    body {
        background-color: #1a1a1a;
    }
`;

export default GlobalStyles;
