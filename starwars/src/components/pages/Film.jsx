import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import api from "../../services/api";

import Card from "../Card";
import Loading from "../layout/Loading";

import { getUrlId } from "../utils/getUrlId";

import { 
  BsFillFileEarmarkTextFill,
  BsFilm,
 } from 'react-icons/bs';
import './Film.css'

const Film = () => {
  const id = useParams()
  
  const [film, setFilm] = useState(null);
  
  useEffect(() => {
    api.get(`/films/${id.id}`)
       .then((response) => {
         console.log(response);
         setFilm(response.data)
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      });
  }, []);

  return (
    <div className="film-page">
      {film ?
        <>
          <Card 
            key={film.title} 
            imgURL={`https://starwars-visualguide.com/assets/img/films/${getUrlId(film.url,)}.jpg`} 
            title={film.title}
            object= {film}
            showLink = {false}
          />
          <div className="info">
            <h3>
                <BsFilm/> Direção:
            </h3>
            <p>{film.director}</p>
          </div>
          <div className="info description">
            <h3>
                <BsFillFileEarmarkTextFill/> Descrição:
            </h3>
            <p>{film.opening_crawl}</p>
          </div>
        </>
      : (<Loading/>)}

    </div>
  )
}

export default Film;