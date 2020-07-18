import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, border-style, #root {
        max-height: 100vh;
        max-width: 100vw;

        width: 100%;
        height: 100%;
    }

    *, button, input {
        border: 0;
        background: none;
        font-family: Helvetica, Arial, sans-serif;
    }

    html {
        background: var(--primary-background);
    }

    :root {
        --facebook: #1877f2;
        --primary-background: #f0f2f5;
        --secondary-background: #e4e6eb;
        --primary: #050505;
        --secondary-text: #65676b;
    }
`;