import { styled } from "styled-components";
import { Link } from "react-router-dom";

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
`

export default MenuNav;