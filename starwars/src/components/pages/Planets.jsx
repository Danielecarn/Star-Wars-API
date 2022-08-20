import { useEffect, useState } from "react";

import api from "../../services/api";

import Card from "../Card";
import Loading from "../layout/Loading";

import { getUrlId } from "../utils/getUrlId";

import './CardsGrid.css';

const Planets = () => {
  const [planets, setPlanets] = useState(null);
  
  useEffect(() => {
    api.get("/planets/")
       .then((response) => {
         console.log(response);
         setPlanets(response.data.results)
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      });
  }, []);

  return (
    <div className="container">
      <div className="title">
        <h2>Planetas</h2>
      </div>
      <div className="cards-container">
        {Array.isArray(planets) ? planets.map(planet => (
            <Card 
              key={planet.name} 
              imgURL={`https://starwars-visualguide.com/assets/img/planets/${getUrlId(planet.url,)}.jpg`} 
              title={planet.name}
              object={planet}
            />
          ))
          : (<Loading/>)}
      </div>
    </div>
  )
}

export default Planets