import { createGlobalStyle,styled } from 'styled-components';
import { DeviceSize } from './Responsive';

export const GlobalStyle = createGlobalStyle`
    //reset
    html { font-size:62.5%; }
    * { margin:0;padding:0; }
    button { border:none;cursor: pointer; }
    a { text-decoration:none; }
    ol,li { list-style:none; }

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