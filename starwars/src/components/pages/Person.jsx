import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import api from "../../services/api";
import Card from "../Card";
import Loading from "../layout/Loading";
import { getUrlId } from "../utils/getUrlId";

import './Film.css'
import {BsGenderAmbiguous, BsFilm} from 'react-icons/bs';
import {TbPoint} from "react-icons/tb"
import {GiBodyHeight} from 'react-icons/gi';
import {FaBirthdayCake} from 'react-icons/fa';
import {BiPlanet, BiNavigation } from "react-icons/bi";

import ObjName from "../ObjName";

const Person = () => {
  const id = useParams()
  
  const [person, setPerson] = useState();
  const [films, setFilms] = useState([]); //URL DO FILME
  const [homeworld, setHomeworld] = useState();
  const [starships, setStarships] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [species, setSpecies] = useState([]);
  
  useEffect(() => {
    api.get(`/people/${id.id}`)
       .then((response) => {
        setPerson(response.data)
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      });
  }, []);

  useEffect(() => {
    if(person?.films) {
      setFilms(person.films)
    }
  }, [person]);

  useEffect(() => {
    if(person?.homeworld) {
      setHomeworld(person.homeworld)
    }
  }, [person]);

  useEffect(() => {
    if(person?.starships) {
      setStarships(person.starships)
    }
  }, [person]);

  useEffect(() => {
    if(person?.vehicles) {
      setVehicles(person.vehicles)
    }
  }, [person]);

  useEffect(() => {
    if(person?.species) {
      setSpecies(person.species)
    }
  }, [person]);

  return (
    <div className="film-page">
      {person ? 
        <>
          <Card 
            key={person.name} 
            imgURL={`https://starwars-visualguide.com/assets/img/characters/${getUrlId(person.url,)}.jpg`} 
            title={person.name}
            object= {person}
            showLink = {false}
          />
          <div className="info">
            <h3>
                <BsGenderAmbiguous/> Gênero:
            </h3>
            <p>{person.gender}</p>
          </div>
          <div className="info">
            <h3>
                <GiBodyHeight/> Altura:
            </h3>
            <p>{person.height} cm</p>
          </div>
          <div className="info">
            <h3>
                <FaBirthdayCake/> Data de Nascimento:
            </h3>
            <p>{person.birth_year}</p>
          </div>
          {films != "" ? (
            <div className="info">
              <h3>
                  <BsFilm/> Filmes:
              </h3>
              {films.map((film)=> (
                <ObjName objURL={film} key={film}/>
              ))}
            </div>
          ) : null}

          {homeworld ? (
            <div className="info">
              <h3>
                  <BiPlanet/> Planeta Natal:
              </h3>
              <ObjName objURL={homeworld} key={homeworld}/>
            </div>
          ) : null}

          {starships != "" ? (
            <div className="info">
              <h3>
                  <BiNavigation/> Naves:
              </h3>
              {starships.map((starship)=> (
                <ObjName objURL={starship} key={starship}/>
              ))}
            </div>
          ) : null}

          {vehicles != "" ? (
            <div className="info">
              <h3>
                  <BiNavigation/> Veículos:
              </h3>
              {vehicles.map((vehicle)=> (
                <ObjName objURL={vehicle} key={vehicle}/>
              ))}
            </div>
          ) : null}

          {species != "" ? (
            <div className="info">
              <h3>
                  <TbPoint/> Espécie:
              </h3>
              {species.map((specie)=> (
                <ObjName objURL={specie} key={specie}/>
              ))}
            </div>
          ) : null}
        </>
      : (<Loading/>)}
    </div>
  )
}

export default Person