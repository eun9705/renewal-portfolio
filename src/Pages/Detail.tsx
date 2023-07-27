import { useEffect,useState } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { Container, FlexCol, ProjectPageTitle } from '../Style/GlobalStyle';
import { DeviceSize } from '../Style/Responsive';
import projectDummy from '../Dummy/projectData.json';
import Badge from '../Components/Badge';

interface ProjectData {
    eng:string;
    kor:string;
    thumbnail:string;
    mockup:string[];
    overview:string;
    review:string;
}

const Detail = () => {
    const navigator = useNavigate();
    const { pathname } = useLocation();
    const id:string = pathname.split('/')[2];
    const detailNum:number = parseInt(id) - 1;
    const [detailInfo,setDetailInfo] = useState<ProjectData>();
    useEffect(()=>{
        if(parseInt(id) > projectDummy.length) {
            navigator('/error');
        }else {
            setDetailInfo(projectDummy[detailNum]);
        }
    },[]);
    return (
        <DetailWrapper>
            <Container>
                <ProjectPageTitle>
                    <span>{detailInfo?.eng}</span><br />
                    {detailInfo?.kor}
                </ProjectPageTitle>
                <img src={`${process.env.PUBLIC_URL}/${detailInfo?.mockup[0]}`} alt="프로젝트 목업 이미지 1" className='first'/>
                <div className="contentWrap">
                    <Badge name={"Overview"} color={"#F2C94C"} radius={"3rem"} huge/>
                    <p>{detailInfo?.overview}</p>
                    <hr />
                    <Badge name={"Review"} color={"#219653"} radius={"3rem"} huge/>
                    <p>{detailInfo?.review}</p>
                </div>
                <img src={`${process.env.PUBLIC_URL}/${detailInfo?.mockup[1]}`} alt="프로젝트 목업 이미지 2" />
            </Container>
        </DetailWrapper>
    );
};

const DetailWrapper = styled(FlexCol)`
    padding: 20rem 0;text-align:center;
    h2 { text-align:left; }
    img {
        width:100%;
        &.first { margin-top:-10rem; }
    }
    .contentWrap {
        margin: 1rem 0 15.6rem;
        p { margin-top:4rem;padding:0 10rem;color:var(--gray02);line-height:calc(var(--basic-font-size) * 2);white-space:pre-wrap; }
    }
    hr { margin:8rem 0;background-color:#CCCCCC; }
    ${DeviceSize.medium`
        img {
            &.first { margin-top:0; }
        }
        .contentWrap {
            p { padding:0; }
        }
    `}
`

export default Detail;