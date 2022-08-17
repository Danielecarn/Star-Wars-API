import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router-dom";

import App from './App'
import Home from './components/pages/Home';
import Film from './components/pages/Film';
import People from './components/pages/People'; 
import Person from './components/pages/Person';
import Planets from './components/pages/Planets'; 
import Planet from './components/pages/Planet';
import Species from './components/pages/Species'; 
import Starships from './components/pages/Starships'; 
import Vehicles from './components/pages/Vehicles'; 
import Specie from './components/pages/Specie';
import Starship from './components/pages/Starship';
import Vehicle from './components/pages/Vehicle';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home/>}/>
          <Route path="/films/:id" element={<Film/>}/>
          <Route path="/people" element={<People/>}/>
          <Route path="/people/:id" element={<Person/>}/>
          <Route path="/planets" element={<Planets/>}/>
          <Route path="/planets/:id" element={<Planet/>}/>
          <Route path="/species" element={<Species/>}/>
          <Route path="/species/:id" element={<Specie/>}/>
          <Route path="/starships" element={<Starships/>}/>
          <Route path="/starships/:id" element={<Starship/>}/>
          <Route path="/vehicles" element={<Vehicles/>}/>
          <Route path="/vehicles/:id" element={<Vehicle/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
