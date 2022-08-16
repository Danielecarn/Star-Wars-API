import { useEffect, useState } from 'react';

import Loading from '../layout/Loading';
import Card from '../Card';

import { getUrlId } from '../utils/getUrlId';

import api from '../../services/api';

const Home = () => {

  const [films, setFilms] = useState(null);
  
  useEffect(() => {
    api.get("/films/")
       .then((response) => {
         console.log(response);
         setFilms(response.data.results)
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      });
  }, []);




  return (
    <>
      <div>Films</div>
      {Array.isArray(films) ? films.map(film => (
          <Card key={film.title} imgURL={`https://starwars-visualguide.com/assets/img/films/${getUrlId(
            film.url,)}.jpg`} title={film.title}/>
        ))
        : (<Loading/>)}
    </>
  )
}

export default Home;