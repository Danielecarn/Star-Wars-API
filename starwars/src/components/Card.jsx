import { Link } from 'react-router-dom';
import no_img from '../img/no_img.png';
import no_img_large from '../img/no_img_large.jpg';
import './Card.css';
import { getUrl, getUrlId } from './utils/getUrlId';

const Card = ({imgURL, title, object, showLink = true}) => {

  console.log("ESSA É A IMAGEM", imgURL)
  return (
    <div className="card">
        {/* <img src={imgURL} alt={`Imagem de ${title}`}/> */}
        {getUrl(object.url) === "planets" ? (
          <object data={imgURL} type="image/jpg" alt={`Imagem de ${title}`} className="card-obj">
            <img src={no_img_large} />
          </object>
        ): (
          <object data={imgURL} type="image/jpg" alt={`Imagem de ${title}`} className="card-obj">
            <div className='imagem'><img src={no_img} /> </div>
          </object>
        )}
        
        <h3>{title}</h3>
        {showLink && <Link to={`/${getUrl(object.url)}/${getUrlId(object.url)}`}>Detalhes</Link>}
    </div>
  )
}

export default Card;