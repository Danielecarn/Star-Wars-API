import { Link } from "react-router-dom";

import img from "../../img/people.png";

import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={img} alt="vader" />
          <h2>
              <Link to="/">
                  Star Wars API
              </Link>
          </h2>
      </div>
        <ul className='list'>
          <li className='item'>
            <Link to='/people'>Personagens</Link>
          </li>
          <li className='item'>
            <Link to='/planets'>Planetas</Link>
          </li>
          <li className='item'>
            <Link to='/species'>Espécies</Link>
          </li>
          <li className='item'>
            <Link to='/starships'>Naves</Link>
          </li>
          <li className='item'>
            <Link to='/vehicles'>Veículos</Link>
          </li>
        </ul>        
    </nav>
  )
}

export default Navbar