import { styled } from 'styled-components';
import { FlexCol, FlexRow } from '../Style/GlobalStyle';
import Buttons from './Buttons';
import BannerIcon from '../Image/bannerIcon.jpg';

const Banner = () => {
    return (
        <BannerWrapper>
            <div>
                <strong>더 궁금하다면 지금 바로 클릭해보세요!</strong>
                <p>기술스택, 경력 정보를 확인할 수 있어요.</p>
                <Buttons name={"소개글 보기"} url={"/about"}/>
                <Buttons name={"경력사항 보기"} url={"/work"}/>
                <img src={BannerIcon} alt="배너 이미지" />
            </div>
        </BannerWrapper>
    );
};

const BannerWrapper = styled(FlexCol)`
    width:100vw;height:30rem;background-color:#D5E6FB;padding-left:10rem;
    div { position:relative;width:164rem;}
    img { position:absolute;bottom:-71.5px;right:0; }
    strong { font-size:2.6rem; }
    p { margin:1rem 0 4rem;color:var(--gray02); }
`

export default Banner;