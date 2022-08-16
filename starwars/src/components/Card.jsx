
const Card = ({imgURL, title}) => {
  return (
    <div className="card">
        <img src={imgURL} alt={`Imagem de ${title}`} />
        <h2>{title}</h2>
    </div>
  )
}

export default Card;