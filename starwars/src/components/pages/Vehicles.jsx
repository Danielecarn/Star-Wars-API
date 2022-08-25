import { useEffect, useState } from "react";

import api from "../../services/api";

import Card from "../Card";
import Loading from "../layout/Loading";
import Pagination from "../layout/Pagination";

import { getUrlId } from "../utils/getUrlId";

import './CardsGrid.css';

const Vehicles = () => {
  const [vehicles, setVehicles] = useState();
  const [qtdVehicles, setQtdVehicles] = useState(Number);
  const [currentPage, setCurrentPage] = useState(1);
  
  useEffect(() => { 
    api.get(`/vehicles/${currentPage != 1 ? "?page="+currentPage : ""}`)
       .then((response) => {
         console.log(response);
        setVehicles(response.data.results)
        setQtdVehicles(response.data.count)
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      });
  }, [currentPage]);

  const pagesNumber = Math.ceil(qtdVehicles/10);

  return (
    <div className="container">
      <div className="title">
        <h3>Veículos</h3>
      </div>
      <div className="paginacao">
        <Pagination
          isFirst={currentPage === 1}
          isLast={currentPage === pagesNumber}
          navigateBack={() => setCurrentPage(currentPage - 1)}
          navigateNext={() => setCurrentPage(currentPage + 1)}
        />
      </div>
      <div className="cards-container">
        {Array.isArray(vehicles) ? vehicles.map(vehicle => (
            <Card 
              key={vehicle.name} 
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