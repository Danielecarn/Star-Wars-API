import { useEffect, useState } from "react";

import api from "../../services/api";

import Card from "../Card";
import Loading from "../layout/Loading";
import Pagination from "../layout/Pagination";

import { getUrlId } from "../utils/getUrlId";

import './CardsGrid.css';

const Species = () => {
  const [species, setSpecies] = useState();
  const [qtdSpecies, setQtdSpecies] = useState(Number);
  const [currentPage, setCurrentPage] = useState(1);
  
  useEffect(() => {
    api.get(`/species/${currentPage != 1 ? '?page='+currentPage : ""}`)
       .then((response) => {
         setSpecies(response.data.results)
         setQtdSpecies(response.data.count)
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      });
  }, [currentPage]);

  const pagesNumber = Math.ceil(qtdSpecies/10);

  return (
    <div className="container">
      <div className="title">
        <h3>Espécies</h3>
      </div>
      <div className="paginacao">
        <Pagination
          isFirst={currentPage ===1}
          isLast={currentPage === pagesNumber}
          navigateBack={() => setCurrentPage(currentPage-1)}
          navigateNext={() => setCurrentPage(currentPage+1)}
        />
      </div>
      <div className="cards-container">
        {Array.isArray(species) ? species.map(specie => (
            <Card 
              key={specie.name} 
              imgURL={`https://starwars-visualguide.com/assets/img/species/${getUrlId(specie.url,)}.jpg`} 
              title={specie.name}
              object={specie}
            />
          ))
          : (<Loading/>)}
      </div>
    </div>
  )
}

export default Species