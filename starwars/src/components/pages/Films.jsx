import { useEffect, useState } from 'react';

import api from '../../services/api';

const Films = () => {

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
      
      {Array.isArray(films)
        ? films.map(film => (
          <li key={film.title}>
             <b>Nome:</b>{film.title}<br/>
          </li>
            ))
        : null}
    </>
  )
}

export default Films