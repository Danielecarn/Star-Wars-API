import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import Card from "../Card";
import Loading from "../layout/Loading";
import { getUrlId } from "../utils/getUrlId";

import './Film.css';

const Starship = () => {
  const id = useParams()
  
  const [starship, setStarship] = useState(null);
 
  useEffect(() => {
    api.get(`/starships/${id.id}`)
       .then((response) => {
        console.log(response);
        setStarship(response.data)
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      });
  }, []);

  useEffect(() => console.table(starship), [starship]);

  useEffect(() => {
    if(starship?.films) {
      console.log(starship.films);
    }
  }, [starship]);

  return (
    <div className="film-page">
      {starship ?
        <>
          <Card 
            key={starship.name} 
            imgURL={`https://starwars-visualguide.com/assets/img/starships/${getUrlId(starship.url,)}.jpg`} 
            title={starship.name}
            object= {starship}
            showLink = {false}
          />
        </>
      : (<Loading/>)}

    </div>
  )
}

export default Starship