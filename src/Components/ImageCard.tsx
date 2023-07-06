import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

interface ImageProps {
    index:number;
    imgUrl:string;
}

const ImageCard = ({index,imgUrl}:ImageProps) => {
    console.log(imgUrl);
    const navigator = useNavigate();
    const clickHandler = (id:number):void => {
        navigator(`/detail/${id}`);
    }
    return <ImgCard onClick={()=>clickHandler(index)}>
        <img src={`${process.env.PUBLIC_URL}/image/${imgUrl}`} alt="프로젝트 썸네일" />
    </ImgCard>
};

const ImgCard = styled.div`
    width:calc((var(--container-size-basic) - var(--gap)) / 2);height:51rem;margin-bottom:2rem;border-radius:1rem;cursor: pointer;overflow:hidden;
    &:nth-child(odd) { margin-right:var(--gap); }
    img { width:100%;height:100%;transition:.5s ease-in-out;object-fit:cover; }
    &:hover { 
        img {transform:scale(1.2);}
    }
`

export default ImageCard;