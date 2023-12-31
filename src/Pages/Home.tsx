import { styled } from 'styled-components';
import { Container, FlexCol, FlexRow } from '../Style/GlobalStyle';
import { media } from '../Style/Responsive';
import projectDummy from '../Dummy/projectData.json';
import ImageCard from '../Components/ImageCard';
import Banner from '../Components/Banner';
import MainBg from '../Image/mainImg.png';
import IntroduceBg from '../Image/introduceBg.jpg';

const Home = () => {
    return (
        <FlexCol>
            <MainImg />
            <IntroduceBox>
                <p>
                    안녕하세요! 프론트엔드 개발자 배은경입니다.<br />
                    최고의 사용자 경험을 제공하는 개발자로 거듭나기 위해<br />
                    저만의 속도로 꾸준히 전진하는 중입니다.
                </p>
            </IntroduceBox>
            <Banner />
            <SideProjectBox>
                <h2><span>Side</span> Project</h2>
                <FlexRow justify='flex-start'>
                    {projectDummy.map((item,idx)=>{
                        return <ImageCard key={idx} index={idx + 1} imgUrl={item.thumbnail}/>
                    })}
                </FlexRow>
            </SideProjectBox>
        </FlexCol>
    );
};

const MainImg = styled.div`
    width:100vw;height:100vh;background:var(--white01) url(${MainBg}) no-repeat center / 40% auto;border-radius:0 0 150rem 150rem / 0 0 15rem 15rem;
    ${media.small} {
        height:50vh;min-height:450px;background-size:55% auto;
    }
`

const IntroduceBox = styled.div`
    width:100vw;margin-top:12rem;padding-top:26vw;background:url(${IntroduceBg}) no-repeat center top / 100%;
    p { font-size:3rem;text-align:center;line-height:2em; }
    ${media.xsmall} {
        padding-top:30vw;
    }
`
const SideProjectBox  = styled(Container)`
    margin-bottom:9em;
    * { font-size:8rem;font-family:'Pacifico'; }
    h2 { margin-bottom:1.6rem; }
    span { color:var(--sub02); }
`
export default Home;

