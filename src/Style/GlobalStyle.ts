import { createGlobalStyle,styled,css } from 'styled-components';
import { media } from './Responsive';
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
        --container-size-basic:80.2vw;
        --gap:2rem;
        --skill-divide:3;
        --basic-font-size:2rem;
    }

    //reset
    html { font-size:62.5%;  }
    html,body { text-size-adjust:none;-webkit-text-size-adjust:none;-moz-text-size-adjust:none;-ms-text-size-adjust:none;-o-text-size-adjust:none;overflow-x:hidden !important; }
    body { font-family:'sCore', '맑은고딕', sans-serif;font-size:var(--basic-font-size);font-weight:400; }
    * { margin:0;padding:0;border: 0;box-sizing: border-box;font-size:var(--basic-font-size); }
    button { border:none;cursor: pointer; }
    a { text-decoration:none;color:var(--black); }
    strong { font-weight:600; }
    .tablet-block { display:none; }
    .mobile-block { display:none; }

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

    ${media.large} {
        :root {
            --skill-divide:2
        }
    }

    ${media.medium} {
        html { font-size:50%; }
    }

    ${media.small} {
        :root {
            --skill-divide:1
        }
        .tablet-none { display:none; }
        .tablet-block { display:block; }
    }

    ${media.xsmall} {
        :root {
            --basic-font-size:2.5rem;
        }
        html { font-size:25%; }
        .mobile-none { display:none; }
        .mobile-block { display:block; }
    }
`;

export const Container = styled.div`
    width: var(--container-size-basic);
`;

export const SubPageTitle = styled.h1<{color?:string}>`
    font-family: 'sCore';font-size:8rem;font-weight:600;
    span { color:${(props) => props.color};font-size:8rem;font-weight:600; }
`

export const SubTitle = styled.h2<{color?:string,direction?:string}>`
    width:100%;font-family: 'sCore';font-size:5rem;font-weight:600;position:relative;
    span { color:${(props) => props.color};font-size:5rem;font-weight:600; }
    &:after { 
        content:'';position:absolute;left:0;bottom:.28em;width:calc(50% - 2em);height:.1em;background-color:${(props) => props.color};border-radius:0 .1em .1em 0; 
        ${(props) => props.direction === 'right' && css`
            left:auto;right:0;
            width:calc(50% - 4em); 
            border-radius: .1em 0 0 .1em;
        `}
    }
`

export const ProjectPageTitle = styled.h2`
    font-family: 'sCore';font-size:5rem;font-weight:500;
    span { font-family:'Pacifico';font-size:3rem;color:var(--gray02); }
`

export const FlexRow = styled.div<{align?:string,justify?:string}>`
    display:flex;
    flex-direction:row;
    flex-wrap: wrap;
    align-items: ${(props) => props.align || "center"};
    justify-content: ${(props) => props.justify || "center"};
`

export const FlexCol = styled.div<{align?:string,justify?:string}>`
    display:flex;
    flex-direction:column;
    align-items: ${(props) => props.align || "center"};
    justify-content: ${(props) => props.justify || "center"};
`