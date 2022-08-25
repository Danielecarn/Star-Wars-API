import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUrl, getUrlId } from "./utils/getUrlId";

const ObjName = ({objURL}) => {
    const [objData, setObjData] = useState({});

    useEffect(() => {
      axios.get(objURL)
        .then((response) => {
          setObjData(response.data)
        })
        .catch((err) => {
          console.error("ops! ocorreu um erro : " + err);
        });
    }, []);
    
    return(
      <Link to={`/${getUrl(objURL)}/${getUrlId(objURL)}`}>
        {objData.title ? (
          objData.title
        ): objData.name}
      </Link>
    );
} 

export default ObjName;