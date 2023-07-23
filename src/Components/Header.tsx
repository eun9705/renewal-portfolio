import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import MenuNav from './MenuNav';
import Logo from '../Image/logo.png'
import { DeviceSize } from '../Style/Responsive';

const Header = () => {
    return (
        <HeaderWrapper>
            <Link to='/'>
                <img src={Logo} alt='로고 이미지'/>
            </Link>
            <MenuNav size={"2rem"} gap={"3rem"}/>
        </HeaderWrapper>
    );
};

const HeaderWrapper = styled.header`
    position:absolute;left:0;top:0;display:flex;align-items:center;justify-content:space-between;width:100vw;height:10rem;padding:0 5rem;box-sizing:border-box;
    ${DeviceSize.large`
        img { width:5rem; }
    `}
    ${DeviceSize.xsmall`
        padding:0 2.5rem;
    `}
`

export default Header;