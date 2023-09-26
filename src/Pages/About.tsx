import { styled } from "styled-components";
import { Container, FlexCol, FlexRow, SubPageTitle, SubTitle } from "../Style/GlobalStyle";
import { media } from "../Style/Responsive";
import SkillDummy from '../Dummy/SkillData.json';
import DotList from "../Components/DotList";
import MainImg from '../Image/aboutImg.png';
import list01 from '../Image/howWork_1.jpg';
import list02 from '../Image/howWork_2.jpg';
import list03 from '../Image/howWork_3.jpg';
import list04 from '../Image/howWork_4.jpg';

const About = () => {
    return (
        <AboutWapper>
            <div className="textWrapper">
                <SubPageTitle color={"#F2C94C"}>About <span>Eun Kyoung</span></SubPageTitle>
                <img src={MainImg} alt="메인 이미지" className="tablet-block"/>
                <p>
                    스타트업에서 프론트엔드 개발자로 근무하며 React, JavaScript, Scss, Git 등을 이용해 <br className="mobile-none"/>
                    웹 서비스 퍼블리싱, 개발업무를 담당하였습니다.<br /><br />

                    항상 고객에게 편리하고 좋은 서비스(경험)를 제공할 수 있도록 고민하고<br />
                    디자이너, 백엔드 개발자 등 다양한 직무의 동료들과<br className="mobile-none"/>
                    적극적으로 커뮤니케이션하며 협업했습니다. <br /><br />

                    업무 외에도 개인의 역량과 전문성을 키우기 위해 <br className="mobile-none"/>
                    알고리즘 문제 풀기, 인프런 강의 듣기 등 꾸준히 자기 개발을 하고 있습니다.<br />
                </p>
                <img src={MainImg} alt="메인 이미지" className="tablet-none"/>
            </div>
            <HowWorkWrapper>
                <SubTitle color={"#2F80ED"} direction={"right"}>How I <span>Work</span></SubTitle>
                <Container>
                    <img src={list01} alt="목록1 이미지" />
                    <img src={list02} alt="목록2 이미지" />
                    <img src={list03} alt="목록3 이미지" />
                    <img src={list04} alt="목록4 이미지" />
                </Container>
            </HowWorkWrapper>
            <SkillWrapper>
                <SubTitle color={"#219653"}><span>Skill</span></SubTitle>
                <Container>
                    <FlexRow align="flex-start" justify="flex-start">
                        <p>Front-End</p>
                        <FlexRow justify="flex-start">
                            {SkillDummy.front.map((item,idx)=>{
                                return <DotList name={item} dotColor={'#6FCF97'} key={idx}/>
                            })}
                        </FlexRow>
                    </FlexRow>
                    <hr />
                    <FlexRow align="flex-start" justify="flex-start">
                        <p>Etc</p>
                        <FlexRow justify="flex-start">
                            {SkillDummy.etc.map((item,idx)=>{
                                return <DotList name={item} dotColor={'#F2C94C'} key={idx}/>
                            })}
                        </FlexRow>
                    </FlexRow>
                </Container>
            </SkillWrapper>
        </AboutWapper>
    );
};

const AboutWapper = styled(FlexCol)`
    position:relative;margin-top: 20rem;
    h1 {
        position:relative;padding-top:5.8rem;
        &:after { content:'';position:absolute;left:-13.55vw;bottom:-.43em;display:block;width:57.3vw;height:.0625em;border-radius:0 .5rem .5rem 0;background-color:var(--sub03); }
    }
    .textWrapper { 
        position:relative;width:100%;height:40vw;margin-left:26rem; 
        p { margin-top:7rem;color:var(--gray02);line-height:calc(var(--basic-font-size) * 1.6); }
        img { position:absolute;right:13rem;bottom:0;z-index:-1;height:100%; }
    }
    ${media.large} {
        h1{
            &:after  { width:68vw; }
        }
        .textWrapper {
            img { height:80%; }
        }
    }
    ${media.small} {
        h1 {
            &:after {
                width:100%;left:-7rem;
            }
        }
        .textWrapper {
            height:auto;padding:0 7rem;margin-left:0;
            img { position:inherit;right:0;left:0;height:50rem;margin:10rem auto 0; }
        }
    }
    ${media.xsmall} {
        margin-top:8em;
        .textWrapper {
            padding: 0 2.8em;
            p { margin-top:2.8em;line-height:1.6em; }
            img { height:20em; }
        }
    }
`;

const HowWorkWrapper = styled(FlexCol)`
    width:100%;margin: 11rem 0 20rem;text-align:center;
    div { display:flex;flex-direction:column; margin-top:8rem; }
    img {
        width:53.3vw;align-self: flex-start;margin-bottom:1rem;
        &:nth-child(even) { align-self: flex-end; }
    }
    ${media.xsmall} {
        margin: 8em 0;
        div { margin-top:3.2em; }
        img { width:100%;margin-bottom:1em; }
    }
`

const SkillWrapper = styled(FlexCol)`
    width:100%;margin-bottom:28rem;text-align:center;
    > div { 
        > div {
            &:first-child { margin-top:15rem; }
            p { width:23rem;padding-right:5rem;font-size:2.8rem;font-weight:500;color:var(--gray02);text-align:right; }
            > div { 
                width:calc(100% - 23rem);flex-wrap:wrap; 
            }
        }
    }
    hr { height:1px;margin:4em 0 5em;background-color:var(--gray02); }
    ${media.xsmall} {
        margin-bottom: 10em;
        > div {
            > div {
                &:first-child { margin-top:6em; }
                p { width:9.2em;padding-right:2em;font-size:1.2em; }
                > div { width:calc(100% - 11.2em); }
            }
        }
    }
`

export default About;