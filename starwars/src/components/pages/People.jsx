import { useEffect, useState } from 'react';

import Loading from '../layout/Loading';
import api from '../../services/api';
import Card from '../Card';
import { getUrlId } from '../utils/getUrlId';

import './CardsGrid.css';
import BasicPagination from '../BasicPagination';


const People = () => {


  const [people, setPeople] = useState(null);
  
  useEffect(() => {
    api.get(`/people/`)
       .then((response) => {
         console.log(response);
         setPeople(response.data.results)
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      });
  }, []);


  return (
    <div className='container'>
      <div className='title'>
        <h3>Personagens</h3>
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
      <div className='paginacao'> 
        {BasicPagination()}
      </div>
    </div>
  )
}

export default People