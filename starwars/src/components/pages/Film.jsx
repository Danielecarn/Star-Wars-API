import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import api from "../../services/api";

import Card from "../Card";
import Loading from "../layout/Loading";

import { getUrlId } from "../utils/getUrlId";

import { 
  BsFillFileEarmarkTextFill,
  BsFillFileEarmarkPersonFill,
  BsFilm,
 } from 'react-icons/bs';
import {TbPoint} from "react-icons/tb";
import {BiPlanet, BiNavigation} from "react-icons/bi";
import {SiStarship} from "react-icons/si";

import './Film.css'
import ObjName from "../ObjName";

const Film = () => {
  const id = useParams()
  
  const [film, setFilm] = useState(null);
  const [planets, setPlanets] = useState([]);
  const [starships, setStarships] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [species, setSpecies] = useState([]);
  const [people, setPeople] = useState([]);
  
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

  useEffect(() => {
    if(film?.characters) {
      setPeople(film.characters)
    }
  }, [film]);

  useEffect(() => {
    if(film?.planets) {
      setPlanets(film.planets)
    }
  }, [film]);

  useEffect(() => {
    if(film?.species) {
      setSpecies(film.species)
    }
  }, [film]);

  useEffect(() => {
    if(film?.starships) {
      setStarships(film.starships)
    }
  }, [film]);

  useEffect(() => {
    if(film?.vehicles) {
      setVehicles(film.vehicles)
    }
  }, [film]);

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

          {people ? (
            <div className="info">
              <h3>
                  <BsFillFileEarmarkPersonFill/> Personagens:
              </h3>
              {people.map((person)=> (
                <ObjName objURL={person} key={person}/>
              ))}
            </div>
          ) : null}

          {planets ? (
            <div className="info">
              <h3>
                  <BiPlanet/> Planetas:
              </h3>
              {planets.map((planet)=> (
                <ObjName objURL={planet} key={planet}/>
              ))}
            </div>
          ) : null}

          {species ? (
            <div className="info">
              <h3>
                  <TbPoint/> Espécie:
              </h3>
              {species.map((specie)=> (
                <ObjName objURL={specie} key={specie}/>
              ))}
            </div>
          ) : null}

          {starships ? (
            <div className="info">
              <h3>
                  <SiStarship/> Naves:
              </h3>
              {starships.map((starship)=> (
                <ObjName objURL={starship} key={starship}/>
              ))}
            </div>
          ) : null}

          {vehicles ? (
            <div className="info">
              <h3>
                  <BiNavigation/> Veículos:
              </h3>
              {vehicles.map((vehicle)=> (
                <ObjName objURL={vehicle} key={vehicle}/>
              ))}
            </div>
          ) : null}
        </>
      : (<Loading/>)}

    </div>
  )
}

export default Film;