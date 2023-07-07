import { styled } from "styled-components";
import Badge from "./Badge";
import { FlexRow } from "../Style/GlobalStyle";

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
                        return <Badge name={item} color={"#F2C94C"} radius={"1rem"} key={idx}/>
                    })}
                </BadgeWrapper>
            </ContentBox>
        </ListContainer>
    );
};

const ListContainer = styled(FlexRow)`
    p,span { font-size:2.6rem;font-weight:500; }
    > p { width:27.5rem;margin-right:13.1rem;white-space:pre-wrap; }
`

const ContentBox = styled.div`
    span { font-size:2.2rem;font-weight:500;color:var(--gray02); }
    ul { margin-top:3rem;padding-left:2rem; }
    li { font-size:2rem;line-height:4rem; }
`

const BadgeWrapper = styled(FlexRow)`
    padding-left: 2rem;
    div { margin-right:1rem; }
`

export default WorkList;