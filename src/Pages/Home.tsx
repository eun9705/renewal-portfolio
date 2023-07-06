import { styled } from 'styled-components';
import { Container, FlexCol, FlexRow } from '../Style/GlobalStyle';
import ImageCard from '../Components/ImageCard';
import MainBg from '../Image/mainImg.png';
import IntroduceBg from '../Image/IntroduceBg.svg';
import Banner from '../Components/Banner';

const Home = () => {
    const imgArr:string[] = ["thumbnail_1.webp","thumbnail_2.webp","thumbnail_3.webp"];
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
            <SideProjectBox>
                <h2><span>Side</span> Project</h2>
                <FlexRow justify='flex-start'>
                    {imgArr.map((item,idx)=>{
                        return <ImageCard key={idx} index={idx + 1} imgUrl={item}/>
                    })}
                </FlexRow>
            </SideProjectBox>
            <Banner />
        </FlexCol>
    );
};

const MainImg = styled.div`
    width:100vw;height:100vh;background:var(--white01) url(${MainBg}) no-repeat center / 40% auto;border-radius:0 0 150rem 150rem / 0 0 15rem 15rem;
`

const IntroduceBox = styled.div`
    width:100%;margin:12rem 0 30rem;padding-top:50rem;background:url(${IntroduceBg}) no-repeat center top;
    p { font-size:3rem;text-align:center;line-height:5.1rem; }
`
const SideProjectBox  = styled(Container)`
    margin-bottom:7.6rem;
    * { font-size:8rem;font-family:'Pacifico'; }
    h2 { margin-bottom:1.6rem; }
    span { color:var(--sub02); }
`
export default Home;

