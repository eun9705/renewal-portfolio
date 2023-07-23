import { styled } from 'styled-components';
import MenuNav from './MenuNav';
import mailIcon from '../Image/emailIcon.png';
import { FlexCol } from '../Style/GlobalStyle';
import { DeviceSize } from '../Style/Responsive';

const Footer = () => {
    return (
        <FooterWrapper>
            <MenuNav size={"1.6rem"} gap={"8rem"}/>
            <div>
                <p>Contact.<strong>eun97052425@gmail.com</strong></p>
                <span>
                    ⓒ 2023. Bae Eunkyoung. All rights reserved.<br />
                    해당 사이트는 1920*1080해상도에 최적화 되었습니다.
                </span>
            </div>
        </FooterWrapper>
    );
};

const FooterWrapper = styled.footer`
    display:flex;flex-direction:column;justify-content:space-between;width:100vw;height:20rem;padding:4.3rem 10rem;box-sizing:border-box;background-color:var(--white01);
    div:last-child {
        text-align: right;
        * { font-size:1.4rem; }
        p { display: inline-block;margin-bottom:2rem;padding-left:3rem;background:url(${mailIcon}) no-repeat center left / contain; }
        span { display:block; }
        strong { font-weight:600; }
    }
    ${DeviceSize.small`
        height:30rem;
        div:last-child {
            p { padding-left:6rem; }
        }
    `}
`

export default Footer;