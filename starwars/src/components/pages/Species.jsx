import { useEffect, useState } from "react";

import api from "../../services/api";

import Card from "../Card";
import Loading from "../layout/Loading";

import { getUrlId } from "../utils/getUrlId";

import './CardsGrid.css';

const Species = () => {
  const [species, setSpecies] = useState(null);
  
  useEffect(() => {
    api.get("/species/")
       .then((response) => {
         console.log(response);
         setSpecies(response.data.results)
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      });
  }, []);

  return (
    <div className="container">
      <div className="title">
        <h3>Espécies</h3>
      </div>
      <div className="cards-container">
        {Array.isArray(species) ? species.map(specie => (
            <Card 
              key={specie.name} 
              imgURL={`https://starwars-visualguide.com/assets/img/species/${getUrlId(specie.url,)}.jpg`} 
              title={specie.name}
              object={specie}
            />
          ))
          : (<Loading/>)}
      </div>
    </div>
  )
}

export default Species