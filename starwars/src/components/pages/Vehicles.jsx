import { useEffect, useState } from "react";

import api from "../../services/api";

import Card from "../Card";
import Loading from "../layout/Loading";

import { getUrlId } from "../utils/getUrlId";

import './CardsGrid.css';

const Vehicles = () => {
  const [vehicles, setVehicles] = useState(null);
  
  useEffect(() => {
    api.get("/vehicles/")
       .then((response) => {
         console.log(response);
         setVehicles(response.data.results)
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      });
  }, []);

  return (
    <div className="container">
      <div className="title">
        <h3>Veículos</h3>
      </div>
      <div className="cards-container">
        {Array.isArray(vehicles) ? vehicles.map(vehicle => (
            <Card 
              key={vehicles.title} 
              imgURL={`https://starwars-visualguide.com/assets/img/vehicles/${getUrlId(vehicle.url,)}.jpg`} 
              title={vehicle.name}
              object={vehicle}
            />
          ))
          : (<Loading/>)}
      </div>
    </div>
  )
}

export default Vehicles