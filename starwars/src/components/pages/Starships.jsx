import { useEffect, useState } from "react";

import api from "../../services/api";

import Card from "../Card";
import Loading from "../layout/Loading";

import { getUrlId } from "../utils/getUrlId";

import './CardsGrid.css';

const Starships = () => {
  const [starships, setStarships] = useState(null);
  
  useEffect(() => {
    api.get("/starships/")
       .then((response) => {
         console.log(response);
         setStarships(response.data.results)
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      });
  }, []);

  return (
    <div className="container">
      <div className="title">
        <h2>Naves</h2>
      </div>
      <div className="cards-container">
        {Array.isArray(starships) ? starships.map(starship => (
            <Card 
              key={starship.name} 
              imgURL={`https://starwars-visualguide.com/assets/img/starships/${getUrlId(starship.url,)}.jpg`} 
              title={starship.name}
              object={starship}
            />
          ))
          : (<Loading/>)}
      </div>
    </div>
  )
}

export default Starships