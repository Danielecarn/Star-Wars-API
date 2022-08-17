import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import Card from "../Card";
import Loading from "../layout/Loading";
import { getUrlId } from "../utils/getUrlId";

import {CgCodeClimate} from 'react-icons/cg';
import {AiOutlineColumnWidth} from "react-icons/ai";
import {SiGrav} from "react-icons/si";
import {BsPeople} from 'react-icons/bs';

import './Film.css'

const Planet = () => {
  const id = useParams()
  
  const [planet, setPlanet] = useState(null);
  const [films, setFilms] = useState([]);

  useEffect(() => {
    api.get(`/planets/${id.id}`)
       .then((response) => {
         console.log(response);
         setPlanet(response.data)

      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      });
  }, []);

  return (
    <div className="film-page">
      {planet ? 
        <>
          <Card 
            key={planet.name} 
            imgURL={`https://starwars-visualguide.com/assets/img/planets/${getUrlId(planet.url,)}.jpg`} 
            title={planet.name}
            object= {planet}
            showLink = {false}
          />
          <div className="info">
            <h3>
                <CgCodeClimate/> Clima:
            </h3>
            <p>{planet.climate}</p>
          </div>
          <div className="info">
            <h3>
                <AiOutlineColumnWidth/> Diametro:
            </h3>
            <p>{planet.diameter}</p>
          </div>
          <div className="info">
            <h3>
                <SiGrav/> Gravidade:
            </h3>
            <p>{planet.gravity}</p>
          </div>
          <div className="info">
            <h3>
                <BsPeople/> População:
            </h3>
            <p>{planet.population}</p>
          </div>
          <div className="info">
            <h3>
                <BsPeople/> Filmes:
            </h3>
          
          </div>
        </>
      : (<Loading/>)}
    </div>
  )
}

export default Planet