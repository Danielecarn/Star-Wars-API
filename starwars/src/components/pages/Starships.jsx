import { useEffect, useState } from "react";

import api from "../../services/api";

import Card from "../Card";
import Loading from "../layout/Loading";
import Pagination from "../layout/Pagination";

import { getUrlId } from "../utils/getUrlId";

import './CardsGrid.css';

const Starships = () => {
  
  const [starships, setStarships] = useState();
  const [qtdStarships, setQtdStarships] = useState(Number);
  const [currentPage, setCurrentPage] = useState(1);
  
  useEffect(() => {
    api.get(`/starships/${currentPage != 1 ? "?page="+currentPage : ""}`)
       .then((response) => {
        setStarships(response.data.results)
        setQtdStarships(response.data.count)
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      });
  }, [currentPage]);

  const pagesNumber = Math.ceil(qtdStarships/10);

  return (
    <div className="container">
      <div className="title">
        <h3>Naves</h3>
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
        {Array.isArray(starships) ? starships.map(starship => (
            <Card 
              key={starship.name} 
              imgURL={`https://starwars-visualguide.com/assets/img/starships/${getUrlId(starship.url,)}.jpg`} 
              title={starship.name}
              object={starship}
            />
          ))
          : (<Loading/>)}
      </div>
    </div>
  )
}

export default Starships