import { useEffect, useState } from "react";

import api from "../../services/api";

import Card from "../Card";
import Loading from "../layout/Loading";

import { getUrlId } from "../utils/getUrlId";

const Species = () => {
  const [species, setSpecies] = useState(null);
  
  useEffect(() => {
    api.get("/species/")
       .then((response) => {
         console.log(response);
         setSpecies(response.data.results)
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      });
  }, []);

  return (
    <>
      <div>Species</div>
      {Array.isArray(species) ? species.map(specie => (
          <Card key={specie.name} imgURL={`https://starwars-visualguide.com/assets/img/species/${getUrlId(
            specie.url,)}.jpg`} title={specie.name}/>
        ))
        : (<Loading/>)}
    </>
  )
}

export default Species