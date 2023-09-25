import { styled } from "styled-components";
import { Container, FlexCol, SubPageTitle } from "../Style/GlobalStyle";
import WorkDummy from '../Dummy/WorkData.json';
import WorkList from "../Components/WorkList";

const Work = () => {
    return (
        <WorkWrapper>
            <Container>
                <SubPageTitle color={"#2F80ED"}>Work <span>Experience</span></SubPageTitle>
                <p className="companyName">(주)마크클라우드</p>
                <span className="description">
                    AI 기반 솔루션 및 상표 이미지& 텍스트 검색 서비스 스타트업<br />
                    2021.08 ~ 2022.11
                </span>
                <ListWrapper>
                    {WorkDummy.map((item,idx)=>{
                        return <WorkList key={idx} listInfo={item}/>
                    })}
                </ListWrapper>
            </Container>
        </WorkWrapper>
    );
};

const WorkWrapper = styled(FlexCol)`
    margin-top: 12.5em;
    .companyName { margin:2.5em 0 .25em;font-size:4rem;font-weight:500; }
    .description { margin-bottom:5rem;font-size:2.2rem;color:var(--gray02); }
`

const ListWrapper = styled.div`
    margin: 2.5em 0 15em;
    &::before,&::after { content:'';display:block;width:calc(100% + 40em);height:.2em; }
    &::before { border-radius: .5rem 0 0 .5rem;background-color:var(--sub01); }
    &::after { position:relative;left:-40em;border-radius: 0 .5rem .5rem 0;background-color:var(--sub03); }
`

export default Work;