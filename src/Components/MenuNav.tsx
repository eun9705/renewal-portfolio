import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { media } from "../Style/Responsive";

type SizeProps = {
    size?:string;
    gap:string;
}

const MenuNav = ({size,gap}:SizeProps) => {
    return (
        <MenuWrapper fontSize={size} gap={gap}>
            <Link to='/'>HOME</Link>
            <Link to='/about'>ABOUT</Link>
            <Link to='/work'>WORK</Link>
            <Link to='https://github.com/eun9705' target="_blank">GITHUB</Link>
        </MenuWrapper>
    );
};

const MenuWrapper = styled.div<{fontSize?:string,gap:string}>`
    * { font-size: ${(props)=>props.fontSize ? props.fontSize : "2rem"} }
    a { 
        margin-left: ${(props)=>props.gap};font-weight:600; 
        &:first-child { margin-left:0; }    
    }
    ${media.xsmall} {
        * { font-size:2.5rem; }
        a { margin-left:2.7em; }
    }
`

export default MenuNav;