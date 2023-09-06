import { useNavigate } from 'react-router-dom'; 
import { styled } from 'styled-components';
import { media } from '../Style/Responsive';
import arrowIcon from '../Image/arrowIcon.png';

interface StrProps {
    name:string;
    url:string;
}

const Buttons = ({name,url}:StrProps) => {
    const navigator = useNavigate();
    const clickHandler = (val:string):void => {
        navigator(val);
    }
    return (
        <BasicButton onClick={()=>clickHandler(url)}>{name}</BasicButton>
    );
};

const BasicButton = styled.button<{hideImg?:boolean}>`
    position:relative;z-index:1;margin-right:1rem;padding: 1.5rem 3.9rem 1.5rem 2.4rem;background: var(--white) url(${arrowIcon}) no-repeat center right 1.5rem;border-radius:1rem;box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);font-size:1.6rem;font-weight:500;
    &:last-child { margin:0; }
    ${media.small} {
        background-size:.7rem auto;
    }
    ${media.xsmall} {
        padding:.6em 1.56em .6em 0.96em;font-size: 1em;border-radius:.4em;background-position:center right .6em;background-size:0.28em auto;
    }
`

export default Buttons;