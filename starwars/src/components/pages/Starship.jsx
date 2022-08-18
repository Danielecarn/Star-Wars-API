import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import Card from "../Card";
import Loading from "../layout/Loading";
import { getUrlId } from "../utils/getUrlId";

import{BiNavigation} from "react-icons/bi";

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
          <div className="info">
            <h3>
                <BiNavigation/> Modelo:
            </h3>
            <p>{starship.model}</p>
          </div>
          <div className="info">
            <h3>
                <BiNavigation/> Fabricante:
            </h3>
            <p>{starship.manufacturer}</p>
          </div>
          <div className="info">
            <h3>
                <BiNavigation/> Custo em créditos:
            </h3>
            <p>{starship.cost_in_credits}</p>
          </div>
          <div className="info">
            <h3>
                <BiNavigation/> Comprimento:
            </h3>
            <p>{starship.length}</p>
          </div>
          <div className="info">
            <h3>
                <BiNavigation/> Velocidade Máxima na Atmosfera:
            </h3>
            <p>{starship.max_atmosphering_speed}</p>
          </div>
          <div className="info">
            <h3>
                <BiNavigation/> Passageiros:
            </h3>
            <p>{starship.passengers}</p>
          </div>
          <div className="info">
            <h3>
                <BiNavigation/> Capacidade de Carga:
            </h3>
            <p>{starship.cargo_capacity}</p>
          </div>
          <div className="info">
            <h3>
                <BiNavigation/> Pilotos:
            </h3>
            <p>{starship.pilots}</p>
          </div>
          <div className="info">
            <h3>
                <BiNavigation/> Filmes:
            </h3>
            <p>{starship.films}</p>
          </div>
        </>
      : (<Loading/>)}

    </div>
  )
}

export default Starship