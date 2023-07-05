import { createGlobalStyle,styled } from 'styled-components';
import { DeviceSize } from './Responsive';
import SCD4 from '../Fonts/SCDream4.woff';
import SCD5 from '../Fonts/SCDream5.woff';
import SCD6 from '../Fonts/SCDream6.woff';
import Pacifico from '../Fonts/Pacifico-Regular.woff';

export const GlobalStyle = createGlobalStyle`
    //color
    :root {
        --main:#F2C94C;
        --sub01:#219653;
        --sub02:#2F80ED;
        --sub03:#EB5757;
        --black:#000000;
        --gray01:#333333;
        --gray02:#777777;
        --white:#FFFFFF;
        --white01:#F8F8F8;
    }

    //reset
    html { font-size:62.5%; }
    * { margin:0;padding:0;font-family:'sCore', '맑은고딕', sans-serif;font-size:1.6rem;font-weight:400; }
    button { border:none;cursor: pointer; }
    a { text-decoration:none; }
    ol,li { list-style:none; }

    //font
    @font-face {
        font-family: "sCore";
        src: local("sCore"), url(${SCD4}) format('woff'); 
        font-weight: 400;
    }
    @font-face {
        font-family: "sCore";
        src: local("sCore"), url(${SCD5}) format('woff'); 
        font-weight: 500;
    }
    @font-face {
        font-family: "sCore";
        src: local("sCore"), url(${SCD6}) format('woff'); 
        font-weight: 600;
    }

    @font-face {
        font-family: "Pacifico";
        src: local("sCore"), url(${Pacifico}) format('woff'); 
        font-weight: 400;
    }

    ${DeviceSize.large`

    `}   

    ${DeviceSize.medium`
        html { font-size:50% }
    `}   

    ${DeviceSize.small`
    `}   

    ${DeviceSize.xsmall`
        html { font-size:25% }
    `}   
`;

export const Container = styled.div`
    width: 14.4rem;
`;

export const SubPageTitle = styled.h1`
    font-family: 'sCore';font-size:8rem;font-weight:600;
`

export const ProjectPageTitle = styled.h2`
    font-family: 'sCore';font-size:5rem;font-weight:500;
    span { font-family:'Pacifico';font-size:3rem;color:var(--gray02); }
`