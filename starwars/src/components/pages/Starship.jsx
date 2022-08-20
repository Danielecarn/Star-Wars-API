import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import Card from "../Card";
import Loading from "../layout/Loading";
import { getUrlId } from "../utils/getUrlId";

import{BiNavigation} from "react-icons/bi";
import {AiOutlineColumnWidth} from "react-icons/ai";
import {MdOutlineAttachMoney} from "react-icons/md";
import {BsSpeedometer, BsFilm} from "react-icons/bs";
import {IoIosPeople} from "react-icons/io";
import {FaWeightHanging} from "react-icons/fa";

import './Film.css';
import ObjName from "../ObjName";

const Starship = () => {
  const id = useParams()
  
  const [starship, setStarship] = useState(null);
  const [films, setFilms] = useState([]); //URL DO FILME
  
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
      console.log( "FILMES" ,starship.films);
      setFilms(starship.films)
    }
  }, [starship]);

  var f = films.map((f)=>getUrlId(f));
  
  console.log("ID DOS FILMES", films);
  
  


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
                <MdOutlineAttachMoney/> Custo em créditos:
            </h3>
            <p>{starship.cost_in_credits}</p>
          </div>
          <div className="info">
            <h3>
                <AiOutlineColumnWidth/> Comprimento:
            </h3>
            <p>{starship.length}</p>
          </div>
          <div className="info">
            <h3>
                <BsSpeedometer/> Velocidade Máxima na Atmosfera:
            </h3>
            <p>{starship.max_atmosphering_speed}</p>
          </div>
          <div className="info">
            <h3>
                <IoIosPeople/> Passageiros:
            </h3>
            <p>{starship.passengers}</p>
          </div>
          <div className="info">
            <h3>
                <FaWeightHanging/> Capacidade de Carga:
            </h3>
            <p>{starship.cargo_capacity}</p>
          </div>
          {films ? (
            <div className="info">
              <h3>
                  <FaWeightHanging/> Filmes:
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

export default Starship