
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import Card from '../Card';
import Loading from '../layout/Loading';
import { getUrlId } from '../utils/getUrlId';
import './Film.css';

import{BiNavigation} from "react-icons/bi";
import {AiOutlineColumnWidth} from "react-icons/ai";
import {MdOutlineAttachMoney} from "react-icons/md";
import {BsSpeedometer, BsFilm, BsFillGearFill} from "react-icons/bs";
import {IoIosPeople} from "react-icons/io";
import {FaWeightHanging} from "react-icons/fa";
import {MdClass} from "react-icons/md";
import {GiPlanePilot} from "react-icons/gi";

import ObjName from '../ObjName';

const Vehicle = () => {

  const id = useParams()
  
  const [vehicle, setVehicle] = useState();
  const [films, setFilms] = useState([]); //URL DO FILME
  const [pilots, setPilots ] = useState([]);
  
  useEffect(() => {
    api.get(`/vehicles/${id.id}`)
       .then((response) => {
        setVehicle(response.data)
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      });
  }, []);

  useEffect(() => {
    if(vehicle?.films) {
      setFilms(vehicle.films)
    }
  }, [vehicle]);

  useEffect(() => {
    if(vehicle?.pilots) {
      setPilots(vehicle.pilots)
    }
  }, [vehicle]);

  return (
    <div className="film-page">
      {vehicle ?
        <>
          <Card 
            key={vehicle.name} 
            imgURL={`https://starwars-visualguide.com/assets/img/vehicles/${getUrlId(vehicle.url,)}.jpg`} 
            title={vehicle.name}
            object= {vehicle}
            showLink = {false}
          />
          <div className="info">
            <h3>
                <BiNavigation/> Modelo:
            </h3>
            <p>{vehicle.model}</p>
          </div>
          <div className="info">
            <h3>
                <BsFillGearFill/> Fabricante:
            </h3>
            <p>{vehicle.manufacturer}</p>
          </div>
          <div className="info">
            <h3>
                <MdClass/> Classe:
            </h3>
            <p>{vehicle.vehicle_class}</p>
          </div>
          <div className="info">
            <h3>
                <MdOutlineAttachMoney/> Custo em créditos:
            </h3>
            <p>{vehicle.cost_in_credits}</p>
          </div>
          <div className="info">
            <h3>
                <AiOutlineColumnWidth/> Comprimento:
            </h3>
            <p>{vehicle.length}</p>
          </div>
          <div className="info">
            <h3>
                <BsSpeedometer/> Velocidade Máxima na Atmosfera:
            </h3>
            <p>{vehicle.max_atmosphering_speed}</p>
          </div>
          <div className="info">
            <h3>
                <IoIosPeople/> Passageiros:
            </h3>
            <p>{vehicle.passengers}</p>
          </div>
          <div className="info">
            <h3>
                <FaWeightHanging/> Capacidade de Carga:
            </h3>
            <p>{vehicle.cargo_capacity}</p>
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

export default Vehicle