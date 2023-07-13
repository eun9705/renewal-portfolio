import { styled } from "styled-components";
import { Container, FlexCol, SubPageTitle } from "../Style/GlobalStyle";
import WorkList from "../Components/WorkList";
import WorkDummy from '../Dummy/WorkData.json';

const Work = () => {
    return (
        <WorkWrapper>
            <Container>
                <SubPageTitle color={"#2F80ED"}>Work <span>Experience</span></SubPageTitle>
                <p className="companyName">(주)마크클라우드</p>
                <span className="description">
                    AI 기반 솔루션 및 상표 이미지& 텍스트 검색 서비스 스타트업<br />
                    2021.08 ~ 2022.10
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
    margin-top: 25rem;
    .companyName { margin:10rem 0 1rem;font-size:4rem;font-weight:500; }
    .description { margin-bottom:5rem;font-size:2.2rem;color:var(--gray02); }
`

const ListWrapper = styled.div`
    margin: 5rem 0 30rem;
    &::before,&::after { content:'';display:block;width:calc(100% + 24rem);height:.5rem; }
    &::before { border-radius: .5rem 0 0 .5rem;background-color:var(--sub01); }
    &::after { position:relative;left:-24rem;border-radius: 0 .5rem .5rem 0;background-color:var(--sub03); }
`

export default Work;