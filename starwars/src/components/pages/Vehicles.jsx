import { useEffect, useState } from "react";

import api from "../../services/api";

import Card from "../Card";
import Loading from "../layout/Loading";

import { getUrlId } from "../utils/getUrlId";

const Vehicles = () => {
  const [vehicles, setVehicles] = useState(null);
  
  useEffect(() => {
    api.get("/vehicles/")
       .then((response) => {
         console.log(response);
         setVehicles(response.data.results)
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      });
  }, []);

  return (
    <>
      <div>Vehicles</div>
      {Array.isArray(vehicles) ? vehicles.map(vehicle => (
          <Card key={vehicles.title} imgURL={`https://starwars-visualguide.com/assets/img/vehicles/${getUrlId(
            vehicle.url,)}.jpg`} title={vehicle.name}/>
        ))
        : (<Loading/>)}
    </>
  )
}

export default Vehicles