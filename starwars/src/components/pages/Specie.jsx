import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import Card from "../Card";
import Loading from "../layout/Loading";
import { getUrlId } from "../utils/getUrlId";

import './Film.css';
import {TbLanguage} from "react-icons/tb";
import {AiOutlineColumnHeight} from "react-icons/ai";
import {BiTime} from 'react-icons/bi';
import {GoPrimitiveDot} from 'react-icons/go';

const Specie = () => {
  const id = useParams()
  
  const [specie, setSpecie] = useState(null);
  
  useEffect(() => {
    api.get(`/species/${id.id}`)
       .then((response) => {
         console.log(response);
         setSpecie(response.data)
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      });
  }, []);

  return (
    <div className="film-page">
      {specie ?
        <>
          <Card 
            key={specie.name} 
            imgURL={`https://starwars-visualguide.com/assets/img/species/${getUrlId(specie.url,)}.jpg`} 
            title={specie.name}
            object= {specie}
            showLink = {false}
          />
          <div className="info">
            <h3>
              <TbLanguage/> Idioma:
            </h3>
            <p>{specie.language}</p>
          </div>
          <div className="info">
            <h3>
              <GoPrimitiveDot/> Classificação:
            </h3>
            <p>{specie.classification}</p>
          </div>
          <div className="info">
            <h3>
              <AiOutlineColumnHeight/> Altura Média:
            </h3>
            <p>{specie.average_height} cm</p>
          </div>
          <div className="info">
            <h3>
              <BiTime/> Tempo Médio de Vida:
            </h3>
            <p>{specie.average_lifespan} anos</p>
          </div>
        </>
      : (<Loading/>)}

    </div>
  )
}

export default Specie