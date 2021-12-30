import { createGlobalStyle } from 'styled-components';

// fonts
import BlackHanSans from '../fonts/BlackHanSans.woff';

const GlobalStyle = createGlobalStyle`
    :root{
    --main: #e8384c;
    --black: #000000;
    }

    @font-face {
        font-family: 'Black Han Sans';
        src: url(${BlackHanSans}) format('woff'),
            url(${BlackHanSans}) format('woff2');
        font-weight: 400;
    }

    * {
    /* font-family: 'Black Han Sans'; */
    /* letter-spacing: -0.015em; */
    }

    body{
        margin: 0;
        padding: 0;
    }

    // 로고, 메뉴 폰트 적용
    header, p2 {
        font-family: 'Black Han Sans';
    }
`;

export default GlobalStyle;
