import { useEffect } from "react";
import { useState } from "react";


const filmsURL = import.meta.env.VITE_FILMS;

const Home = () => {
    const [films, setFilms] = useState([])

    const getFilms = async (url) => {
        const resp = await fetch(url)
        const data = await resp.json();

        setFilms(data.results);
    }

    
    getFilms(filmsURL);
    return (
        <div className="Container">
            <h2>Star Wars Films</h2>
            <div className="films-container">
                {films.length === 0 && <p>Carregando...</p>}
                {films.length > 0 && films.map((film) => {film.title})}
            </div>
        </div>
    )
}

export default Home;