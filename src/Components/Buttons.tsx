import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom'; 
import arrowIcon from '../Image/arrowIcon.png';
import { DeviceSize } from '../Style/Responsive';

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
    ${DeviceSize.small`
        background-size:1rem;
    `}
`

export default Buttons;