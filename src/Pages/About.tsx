import { styled } from "styled-components";
import { Container, FlexCol, FlexRow, SubPageTitle, SubTitle } from "../Style/GlobalStyle";
import DotList from "../Components/DotList";
import SkillDummy from '../Dummy/SkillData.json';
import MainImg from '../Image/aboutImg.png';
import list01 from '../Image/howWork_1.png';
import list02 from '../Image/howWork_2.png';
import list03 from '../Image/howWork_3.png';
import list04 from '../Image/howWork_4.png';

const About = () => {
    return (
        <AboutWapper>
            <div className="textWrapper">
                <SubPageTitle color={"#F2C94C"} size={"8rem"}>About <span>Eun Kyoung</span></SubPageTitle>
                <p>
                    스타트업에서 프론트엔드 개발자로 근무하며 React, JavaScript, Scss, Git 등을 이용해<br />
                    웹 서비스 퍼블리싱, 개발업무를 담당하였습니다.<br /><br />

                    항상 고객에게 편리하고 좋은 서비스(경험)를 제공할 수 있도록 고민하고<br />
                    디자이너, 백엔드 개발자 등 다양한 직무의 동료들과<br />
                    적극적으로 커뮤니케이션하며 협업했습니다. <br /><br />

                    업무 외에도 개인의 역량과 전문성을 키우기 위해<br />
                    알고리즘 문제 풀기, 인프런 강의 듣기 등 꾸준히 자기 개발을 하고 있습니다.<br />
                </p>
                <img src={MainImg} alt="메인 이미지" />
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
                        <FlexRow>
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
        &:after { content:'';position:absolute;left:-26rem;bottom:-3.3rem;display:block;width:110rem;height:.5rem;border-radius:0 .5rem .5rem 0;background-color:var(--sub03); }
    }
    .textWrapper { 
        width:100%;height:76.7rem;margin-left:26rem; 
        p { margin-top:7rem;color:var(--gray02);line-height:3.2rem; }
        img { position:absolute;right:0;top:0; }
    }
`;

const HowWorkWrapper = styled(FlexCol)`
    width:100%;margin: 11rem 0 20rem;text-align:center;
    div { display:flex;flex-direction:column; margin-top:8rem; }
    img {
        align-self: flex-start;margin-bottom:1rem;
        &:nth-child(even) { align-self: flex-end; }
    }
`

const SkillWrapper = styled(FlexCol)`
    width:100%;margin-bottom:28rem;text-align:center;
    > div { 
        padding:0 10rem;box-sizing:border-box; 
        > div {
            &:first-child { margin-top:15rem; }
            p { width:23rem;font-size:2.8rem;font-weight:500;color:var(--gray02);text-align:left; }
            > div { 
                width:calc(100% - 23rem);flex-wrap:wrap; 
            }
        }
    }
    hr { margin:4rem 0 5rem;background-color:var(--gray02); }
`

export default About;