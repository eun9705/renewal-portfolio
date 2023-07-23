import { styled } from 'styled-components';
import { FlexCol } from '../Style/GlobalStyle';
import { DeviceSize } from '../Style/Responsive';
import Buttons from './Buttons';
import BannerIcon from '../Image/bannerIcon.jpg';

const Banner = () => {
    return (
        <BannerWrapper>
            <div>
                <strong>더 궁금하다면 지금 바로 클릭해보세요!</strong>
                <p>기술스택, 경력 정보를 확인할 수 있어요.</p>
                <Buttons name={"소개글 보기"} url={"/about"}/>
                <Buttons name={"경력사항 보기"} url={"/work"} positionBool/>
                <img src={BannerIcon} alt="배너 이미지" />
            </div>
        </BannerWrapper>
    );
};

const BannerWrapper = styled(FlexCol)`
    width:100vw;height:30rem;background-color:#D5E6FB;
    div { position:relative;width:85.4vw;max-width:164rem; }
    img { position:absolute;bottom:-71.5px;right:0; }
    strong { font-size:2.6rem; }
    p { margin:1rem 0 4rem;color:var(--gray02);position:relative;z-index:1; }
    ${DeviceSize.large`
        img { width:50%; }
    `}
    ${DeviceSize.medium`
        img { bottom:-54px; }
    `}
    ${DeviceSize.small`
        img { bottom:-16px; }
    `}
    ${DeviceSize.xsmall`
        div { min-width:300px; }
        img { bottom:-22.5px; }
    `}
`

export default Banner;