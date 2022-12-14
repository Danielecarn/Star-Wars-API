import { useEffect, useState } from 'react';

import Loading from '../layout/Loading';
import Card from '../Card';

import { getUrlId } from '../utils/getUrlId';

import api from '../../services/api';

import './CardsGrid.css';

const Home = () => {

  const [films, setFilms] = useState(null);
  
  useEffect(() => {
    api.get("/films/")
       .then((response) => {
        setFilms(response.data.results)
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      });
  }, []);

  return (
    <div className='container'>
      <div className='title'>
        <h3>Filmes</h3>
      </div>
        <div className='cards-container'>
          {Array.isArray(films) ? films.map(film => (
              <Card 
                key={film.title} 
                imgURL={`https://starwars-visualguide.com/assets/img/films/${getUrlId(film.url,)}.jpg`} 
                title={film.title}
                object= {film}
              />
            ))
            : (<Loading/>)}
        </div>
    </div>
  )
}

export default Home;