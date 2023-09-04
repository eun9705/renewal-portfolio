import { styled } from 'styled-components';
import { FlexCol } from '../Style/GlobalStyle';
import { DeviceSize } from '../Style/Responsive';
import Buttons from './Buttons';
import bannerBg from '../Image/bannerBg.jpg';
import bannerBgTablet from '../Image/bannerBgTablet.jpg';
import bannerBgMobile from '../Image/bannerBgMobile.jpg';

const Banner = () => {
    return (
        <BannerWrapper align='flex-end'>
            <strong>더 궁금하다면 지금 바로 클릭해보세요!</strong>
            <p>기술스택, 경력 정보를 확인할 수 있어요.</p>
            <div>
                <Buttons name={"소개글 보기"} url={"/about"}/>
                <Buttons name={"경력사항 보기"} url={"/work"}/>
            </div>
        </BannerWrapper>
    );
};

const BannerWrapper = styled(FlexCol)`
    width:91.6vw;height:30rem;margin:20rem 0;padding:0 12rem;background:url(${bannerBg}) no-repeat center / cover;border-radius:2rem;
    strong { font-size:2.6rem; }
    p { margin:1rem 0 4rem;font-size:1.6rem;color:var(--gray02); }
    ${DeviceSize.medium`
        background-image:url(${bannerBgTablet});
    `}
    ${DeviceSize.small`
        background-position:left 40% center;
    `}
    ${DeviceSize.xsmall`
        height:15rem;margin:12rem 0;padding:0 3rem;background-image:url(${bannerBgMobile});
        p { margin:.5rem 0 3rem; }
    `}

`

export default Banner;