
import loading from "../../img/loading.svg";
import './Loading.css';

const Loading = () => {
  return (
    <div className="loader_container">
        <img className="loader" src={loading} alt="loading"/>
    </div>
  )
}

export default Loading