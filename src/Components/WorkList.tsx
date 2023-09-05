import { styled } from "styled-components";
import { FlexRow } from "../Style/GlobalStyle";
import { media } from "../Style/Responsive";
import Badge from "./Badge";

interface WorkProps {
    listInfo: {
        role:string;
        title:string;
        period:string;
        done:string[];
        stack:string[];
    };
}

const WorkList = ({listInfo}:WorkProps) => {
    const { role,title,period,done,stack } = listInfo;
    return (
        <ListContainer align="flex-start" justify="flex-start">
            <p>{role}</p>
            <ContentBox>
                <p>{title}</p>
                <span>{period}</span>
                <ul>
                    {done.map((item,idx)=>{
                        return <li key={idx}>{item}</li>
                    })}
                </ul>
                <BadgeWrapper>
                    {stack.map((item,idx)=>{
                        return <Badge key={idx} name={item} color={"#F2C94C"} radius={"1rem"} />
                    })}
                </BadgeWrapper>
            </ContentBox>
        </ListContainer>
    );
};

const ListContainer = styled(FlexRow)`
    padding:10rem 0;border-bottom: 1px solid #CCC;
    &:last-child { border-bottom:none; }
    p,span { font-size:2.6rem;font-weight:500; }
    > p { width:27.5rem;margin-right:13.1rem;white-space:pre-wrap; }
    ${media.medium} {
        justify-content:space-between;
        > p { width:auto;margin-right:0; }
    }
    ${media.small} {
        > p { width:100%;margin:0 0 5rem; }
    }
    ${media.xsmall} {
        p,span { font-size:3.4rem; }
    }
`

const ContentBox = styled.div`
    span { font-size:2.2rem;font-weight:500;color:var(--gray02); }
    ul { margin-top:3rem;padding-left:2rem; }
    li { line-height:calc(var(--basic-font-size) * 1.6); }
    ${media.xsmall} {
        span { font-size:3rem; }
    }
`

const BadgeWrapper = styled.div`
    margin-top:.5rem;padding-left: 2rem;
    div { margin-right:1rem; }
    ${media.xsmall} {
        div { margin-bottom:1rem; }
    }
`

export default WorkList;