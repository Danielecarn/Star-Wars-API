import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import Card from "../Card";
import Loading from "../layout/Loading";
import { getUrlId } from "../utils/getUrlId";

import{BiNavigation} from "react-icons/bi";
import {AiOutlineColumnWidth} from "react-icons/ai";
import {MdOutlineAttachMoney} from "react-icons/md";
import {BsSpeedometer, BsFilm, BsFillGearFill} from "react-icons/bs";
import {IoIosPeople} from "react-icons/io";
import {FaWeightHanging} from "react-icons/fa";
import {GiPlanePilot} from "react-icons/gi";

import './Film.css';
import ObjName from "../ObjName";

const Starship = () => {
  const id = useParams()
  
  const [starship, setStarship] = useState(null);
  const [films, setFilms] = useState([]); //URL DO FILME
  const [pilots, setPilots] = useState([]);
  
  useEffect(() => {
    api.get(`/starships/${id.id}`)
       .then((response) => {
        setStarship(response.data)
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      });
  }, []);

  useEffect(() => {
    if(starship?.films) {
      setFilms(starship.films)
    }
  }, [starship]);

  useEffect(() => {
    if(starship?.pilots) {
      setPilots(starship.pilots)
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
                <BsFillGearFill/> Fabricante:
            </h3>
            <p>{starship.manufacturer}</p>
          </div>
          <div className="info">
            <h3>
                <MdOutlineAttachMoney/> Custo em cr??ditos:
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
                <BsSpeedometer/> Velocidade M??xima na Atmosfera:
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

          {pilots != "" ? (
            <div className="info">
              <h3>
                  <GiPlanePilot/> Pilotos:
              </h3>
              {pilots.map((pilot)=> (
                <ObjName objURL={pilot} key={pilot}/>
              ))}
            </div>
          ) : null}
        </>
      : (<Loading/>)}

    </div>
  )
}

export default Starship