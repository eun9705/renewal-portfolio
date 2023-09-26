import { styled } from "styled-components";
import { FlexCol } from "../Style/GlobalStyle";
import { media } from "../Style/Responsive";
import errorImg from '../Image/errorImg.png';

const NotFound = () => {
    return (
        <ErrorWrapper>
            <img src={errorImg} alt="에러이미지" />
            <strong>Page Not Found</strong>
            <p>입력한 주소가 잘못되었거나, <br className="mobile-block"/>사용이 일시 중단되어 요청하신 페이지를 찾을 수 없습니다.</p>
        </ErrorWrapper>
    );
};

const ErrorWrapper =styled(FlexCol)`
    height:100vh;
    img { height:60%; }
    strong {  font-size:4rem;color:var(--main); }
    p { margin-top:1rem; font-weight:500;color:var(--gray01); }
    ${media.small} {
        img { height:auto; }
    }
    ${media.xsmall} {
        text-align:center;
        img { width:80%; }
    }
`

export default NotFound;