import { styled } from 'styled-components';

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
    padding:${(props)=>props.huge ? "1rem 4.8rem" : "0 1.7rem"};
    background-color:${(props)=>props.color || "#F2C94C"};
    border-radius:${(props)=>props.radius || "1rem"};
    font-size:1.6rem;font-weight: 500;color:var(--white);line-height:calc(var(--basic-font-size) * 2);
`

export default Badge;