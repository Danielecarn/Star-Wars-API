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
import {BsFilm} from "react-icons/bs";

import ObjName from "../ObjName";

const Specie = () => {
  const id = useParams()
  
  const [specie, setSpecie] = useState(null);
  const [films, setFilms] = useState([]); //URL DO FILME
  
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

  useEffect(() => {
    if(specie?.films) {
      setFilms(specie.films)
    }
  }, [specie]);

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
          {films ? (
            <div className="info">
              <h3>
                  <BsFilm/> Filmes:
              </h3>
              {films.map((film)=> (
                <ObjName objURL={film} key={film}/>
              ))}
            </div>
          ) : null}
        </>
      : (<Loading/>)}

    </div>
  )
}

export default Specie