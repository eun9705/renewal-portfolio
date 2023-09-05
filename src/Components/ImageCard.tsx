import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { media } from '../Style/Responsive';

interface ImageProps {
    index:number;
    imgUrl:string;
}

const ImageCard = ({index,imgUrl}:ImageProps) => {
    const navigator = useNavigate();
    const clickHandler = (id:number):void => {
        navigator(`/detail/${id}`);
    }
    return <ImgCard onClick={()=>clickHandler(index)}>
        <source srcSet={`${process.env.PUBLIC_URL}/${imgUrl}.webp`} type="image/webp" />
        <img src={`${process.env.PUBLIC_URL}/${imgUrl}.jpg`} alt="프로젝트 썸네일" />
    </ImgCard>
};

const ImgCard = styled.picture`
    width:calc((var(--container-size-basic) - var(--gap)) / 2);height:29.2vw;margin-bottom:2rem;border-radius:1rem;cursor: pointer;overflow:hidden;
    &:nth-child(odd) { margin-right:var(--gap); }
    img { width:100%;height:100%;transition:.5s ease-in-out;object-fit:cover; }
    &:hover { 
        img {transform:scale(1.2);}
    }
    ${media.small} {
        width:100%;height:50vw;border-radius:.4em;
        &:nth-child(odd) { margin-right:0; }
    }
`

export default ImageCard;