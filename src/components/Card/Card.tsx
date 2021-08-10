
import './Card.scss'

interface Props {
    thumbnail: string;
    title: string;
    description: string;
    onClick: () => void;
};

const defaultImg = 'images/default.jpg';

export const Card = ({thumbnail = defaultImg, title, description, onClick}: Props) => {
    return (
        <div className="card" onClick={onClick}>
            <div className="thumbContainer">
             <img alt='img' className="thumb" src={thumbnail}/>
            </div>
            <div className="title">{title}</div>
            <div className="description">{description}</div>
        </div>
    )
}
