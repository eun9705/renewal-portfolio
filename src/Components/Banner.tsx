import { styled } from 'styled-components';
import BannerBg from '../Image/bannerBg.png';
import Buttons from './Buttons';

const Banner = () => {
    return (
        <BannerWrapper>
            <strong>더 궁금하다면 지금 바로 클릭해보세요!</strong>
            <p>기술스택, 경력 정보를 확인할 수 있어요.</p>
            <Buttons name={"소개글 보기"} url={"/about"}/>
            <Buttons name={"경력사항 보기"} url={"/work"}/>
        </BannerWrapper>
    );
};

const BannerWrapper = styled.div`
    width:100vw;height:22.5rem;padding-top:30rem;padding-left:20rem;background: url(${BannerBg}) no-repeat center bottom;
    strong { font-size:2.6rem; }
    p { margin:1rem 0 4rem;color:var(--gray02); }
`

export default Banner;