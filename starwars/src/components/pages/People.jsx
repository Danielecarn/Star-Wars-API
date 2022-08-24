import { useEffect, useState } from 'react';

import Loading from '../layout/Loading';
import Pagination from '../layout/Pagination';
import api from '../../services/api';
import Card from '../Card';
import { getUrlId } from '../utils/getUrlId';

import './CardsGrid.css';

const People = () => {
  const [people, setPeople] = useState();
  const [qtdPeople, setQtdPeople] = useState(Number);
  const [currentPage, setCurrentPage] = useState(1);
  
  useEffect(() => {
    api.get(`/people/${currentPage != 1 ? '?page='+currentPage : ""}`)
       .then((response) => {
        setPeople(response.data.results)
        setQtdPeople(response.data.count);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      });
  }, [currentPage]);

  const pagesNumber = Math.ceil(qtdPeople/10);

  return (
    <div className='container'>
      <div className='title'>
        <h3>Personagens</h3>
      </div>
      <div className='paginacao'> 
        <Pagination
          isFirst={currentPage === 1}
          isLast={currentPage === pagesNumber}
          navigateBack={() => setCurrentPage(currentPage - 1)}
          navigateNext={() => setCurrentPage(currentPage + 1)}
        />
      </div>
      
      <div className='cards-container'>
        {Array.isArray(people) ? people.map(person => (
            <Card 
              key={person.name} 
              imgURL={`https://starwars-visualguide.com/assets/img/characters/${getUrlId(person.url,)}.jpg`} 
              title={person.name}
              object={person}
            />
          ))
          : (<Loading/>)}
      </div>
      
    </div>
  )
}

export default People