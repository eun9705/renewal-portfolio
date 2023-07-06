import { Link } from "react-router-dom";
import { FlexRow } from "../Style/GlobalStyle";
import { styled } from "styled-components";

type SizeProps = {
    size:string;
    gap:string;
}

const MenuNav = ({size,gap}:SizeProps) => {
    return (
        <MenuWrapper fontSize={size} contentGap={gap}>
            <Link to='/'>HOME</Link>
            <Link to='/about'>ABOUT</Link>
            <Link to='/work'>WORK</Link>
            <Link to='https://github.com/eun9705' target="_blank">GITHUB</Link>
        </MenuWrapper>
    );
};

const MenuWrapper = styled.div<{fontSize?:string,contentGap?:string}>`
    * { font-size: ${(props)=>props.fontSize} }
    a { 
        margin-left: ${(props)=>props.contentGap};font-weight:600; 
        &:first-child { margin-left:0; }    
    }
`

export default MenuNav;