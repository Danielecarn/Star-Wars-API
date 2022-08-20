
import { Link } from 'react-router-dom';
import './Card.css';
import { getUrl, getUrlId } from './utils/getUrlId';

const Card = ({imgURL, title, object, showLink = true}) => {
  return (
    <div className="card">
        <img src={imgURL} alt={`Imagem de ${title}`} />
        <h2>{title}</h2>
        {showLink && <Link to={`/${getUrl(object.url)}/${getUrlId(object.url)}`}>Detalhes</Link>}
    </div>
  )
}

export default Card;