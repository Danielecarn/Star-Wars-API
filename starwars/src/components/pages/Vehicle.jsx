
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
import {BsSpeedometer, BsFilm} from "react-icons/bs";
import {IoIosPeople} from "react-icons/io";
import {FaWeightHanging} from "react-icons/fa";

const Vehicle = () => {

  const id = useParams()
  
  const [vehicle, setVehicle] = useState(null);
  
  useEffect(() => {
    api.get(`/vehicles/${id.id}`)
       .then((response) => {
         console.log(response);
         setVehicle(response.data)
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      });
  }, []);

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
                <BiNavigation/> Fabricante:
            </h3>
            <p>{vehicle.manufacturer}</p>
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
          <div className="info">
            <h3>
                <IoIosPeople/> Pilotos:
            </h3>
            <p>{vehicle.pilots}</p>
            
          </div>
          <div className="info">
            <h3>
                <BsFilm/> Filmes:
            </h3>
            <p>{vehicle.films}</p>
          
          </div>
        </>
      : (<Loading/>)}

    </div>
  )
}

export default Vehicle