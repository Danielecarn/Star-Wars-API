import { useEffect, useState } from "react";
import api from "../../services/api";
import Card from "../Card";
import Loading from "../layout/Loading";
import { getUrlId } from "../utils/getUrlId";

const Planets = () => {
  const [planets, setPlanets] = useState(null);
  
  useEffect(() => {
    api.get("/planets/")
       .then((response) => {
         console.log(response);
         setPlanets(response.data.results)
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      });
  }, []);

  return (
    <>
      <div>Planets</div>
      {Array.isArray(planets) ? planets.map(planet => (
          <Card key={planet.name} imgURL={`https://starwars-visualguide.com/assets/img/planets/${getUrlId(
            planet.url,)}.jpg`} title={planet.name}/>
        ))
        : (<Loading/>)}
    </>
  )
}

export default Planets