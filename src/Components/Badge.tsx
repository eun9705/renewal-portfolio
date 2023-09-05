import { styled } from 'styled-components';
import { media } from '../Style/Responsive';

interface BadgeProps {
    name:string;
    color:string;
    radius:string;
    huge?:boolean;
}

const Badge = ({name,color,radius,huge}:BadgeProps) => {
    return <BadgeWrapper color={color} radius={radius} huge={huge}>{name}</BadgeWrapper>
};

const BadgeWrapper = styled.div<{color?:string,radius?:string,huge?:boolean}>`
    display:inline-block;
    padding:${(props)=>props.huge ? ".625em 3em" : "0 1.1em"};
    background-color:${(props)=>props.color || "#F2C94C"};
    border-radius:${(props)=>props.radius || ".625em"};
    font-size:1.6rem;font-weight: 500;color:var(--white);line-height:calc(var(--basic-font-size) * 2);
    ${media.xsmall} {
        font-size:1em;line-height: 3em;
    }
`

export default Badge;