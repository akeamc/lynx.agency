import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    html {
      font-family: "Inter", -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
    }

    body {
      margin: 0;
    }

    *::selection {
      color: white;
      background: red;
    }

    :root {
      --section-spacing: 56px;

      @media (min-width: 576px) {
        --section-spacing: 80px;
      }

      @media(min-width: 992px) {
        --section-spacing: 120px;
      }
    }
`;
