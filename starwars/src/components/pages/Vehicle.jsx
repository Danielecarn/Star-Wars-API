
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import './Film.css';

const Vehicle = () => {

  const id = useParams()
  
  const [film, setFilm] = useState(null);
  
  useEffect(() => {
    api.get(`/vehicles/${id.id}`)
       .then((response) => {
         console.log(response);
         setFilm(response.data)
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      });
  }, []);

  return (
    <div>Vehicle</div>
  )
}

export default Vehicle