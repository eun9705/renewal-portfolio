import { createGlobalStyle,styled,css } from 'styled-components';
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
        --container-size-basic:140rem;
        --gap:2rem;
    }

    //reset
    html { font-size:62.5%;overflow-x:hidden; }
    body { overflow-x:hidden; }
    * { margin:0;padding:0;font-family:'sCore', '맑은고딕', sans-serif;font-size:1.6rem;font-weight:400;border: 0;box-sizing: border-box; }
    button { border:none;cursor: pointer; }
    a { text-decoration:none;color:var(--black); }
    strong { font-weight:600; }

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
        :root {
            --container-size-basic:118rem;
        }
    `}   

    ${DeviceSize.medium`
        :root {
            --container-size-basic:102.5rem;
        }
        html { font-size:50% }
        * { font-size:14px; }
    `}   

    ${DeviceSize.small`
        html { font-size:25% }
    `}   

    ${DeviceSize.xsmall`
        * { font-size:11px; }
    `}   
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
        content:'';position:absolute;left:0;bottom:1.4rem;width:46%;height: .5rem;background-color:${(props) => props.color};border-radius:0 .5rem .5rem 0; 
        ${(props) => props.direction === 'right' && css`
            left:auto;right:0;width:40.5%;border-radius:.5rem 0 0 .5rem; 
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