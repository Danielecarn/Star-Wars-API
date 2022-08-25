import { useEffect, useState } from "react";

import api from "../../services/api";

import Card from "../Card";
import Loading from "../layout/Loading";
import Pagination from "../layout/Pagination";

import { getUrlId } from "../utils/getUrlId";

import './CardsGrid.css';

const Planets = () => {
  const [planets, setPlanets] = useState(null);
  const [qtdPlanets, setQtdPlanets] = useState(Number);
  const [currentPage, setCurrentPage] = useState(1);
  
  useEffect(() => {
    api.get(`/planets/${currentPage != 1 ? "?page="+currentPage : ""}`)
       .then((response) => {
         setPlanets(response.data.results)
         setQtdPlanets(response.data.count)
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      });
  }, [currentPage]);

  const pagesNumber = Math.ceil(qtdPlanets/10);

  return (
    <div className="container">
      <div className="title">
        <h3>Planetas</h3>
      </div>
      <div className="paginacao">
        <Pagination
          isFirst={currentPage ===1}
          isLast={currentPage === pagesNumber}
          navigateBack={() => setCurrentPage(currentPage - 1)}
          navigateNext={() => setCurrentPage(currentPage + 1)}
        />
      </div>
      <div className="cards-container">
        {Array.isArray(planets) ? planets.map(planet => (
            <Card 
              key={planet.name} 
              imgURL={`https://starwars-visualguide.com/assets/img/planets/${getUrlId(planet.url,)}.jpg`} 
              title={planet.name}
              object={planet}
            />
          ))
          : (<Loading/>)}
      </div>
    </div>
  )
}

export default Planets