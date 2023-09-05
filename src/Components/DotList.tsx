import { styled } from 'styled-components';
import { FlexRow } from '../Style/GlobalStyle';
import { media } from '../Style/Responsive';

interface DotListProps {
    name:string;
    dotColor:string;
}

const DotList = ({name,dotColor}:DotListProps) => {
    return <SkillName color={dotColor} justify='flex-start'><i/>{name}</SkillName>
};

const SkillName = styled(FlexRow)<{color?:string}>`
    width:calc(100% / var(--skill-divide));margin-bottom:2rem;font-size: 2.4rem;
    i { display:inline-block;width:2rem;height:2rem;margin-right:2rem;background-color:${(props)=>props.color};border-radius:50%; }
    ${media.xsmall} {
        margin-bottom:1.5em;font-size: 1em;
        i { width:.8em;height:.8em;margin-right:.8em; }
    }
`

export default DotList;