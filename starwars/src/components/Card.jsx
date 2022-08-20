
import { Link } from 'react-router-dom';
import './Card.css';
import { getUrl, getUrlId } from './utils/getUrlId';

const Card = ({imgURL, title, object, showLink = true}) => {
  return (
    <div className="card">
        {imgURL ? (
          <img src={imgURL} alt={`Imagem de ${title}`} />
        ): <p>NÃO TEM IMAGEM</p>}
        <h2>{title}</h2>
        {showLink && <Link to={`/${getUrl(object.url)}/${getUrlId(object.url)}`}>Detalhes</Link>}
    </div>
  )
}

export default Card;