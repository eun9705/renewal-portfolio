import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { media } from '../Style/Responsive';

interface ImageProps {
    index:number;
    imgUrl:string;
}

const ImageCard = ({index,imgUrl}:ImageProps) => {
    return <ImgCard to={`/detail/${index}`}>
        <img src={`${process.env.PUBLIC_URL}/${imgUrl}.jpg`} alt="프로젝트 썸네일" />
    </ImgCard>
};

const ImgCard = styled(Link)`
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