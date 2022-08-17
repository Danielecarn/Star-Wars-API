import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import api from "../../services/api";
import Card from "../Card";
import Loading from "../layout/Loading";
import { getUrlId } from "../utils/getUrlId";

import './Film.css'
import {BsGenderAmbiguous} from 'react-icons/bs';
import {GiBodyHeight} from 'react-icons/gi';
import {FaBirthdayCake} from 'react-icons/fa'

const Person = () => {
  const id = useParams()
  
  const [person, setPerson] = useState(null);
  
  useEffect(() => {
    api.get(`/people/${id.id}`)
       .then((response) => {
         console.log(response);
         setPerson(response.data)
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      });
  }, []);
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
            <p>{person.height}</p>
          </div>
          <div className="info">
            <h3>
                <FaBirthdayCake/> Data de Nascimento:
            </h3>
            <p>{person.birth_year}</p>
          </div>
        </>
      : (<Loading/>)}
    </div>
  )
}

export default Person