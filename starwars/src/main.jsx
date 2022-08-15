import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router-dom";

import App from './App'
import Home from './components/pages/Home';
import People from './components/pages/People'; 
import Planets from './components/pages/Planets'; 
import Species from './components/pages/Species'; 
import Starships from './components/pages/Starships'; 
import Vehicles from './components/pages/Vehicles'; 
import Films from "./components/pages/Films";

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home/>}/>
          <Route path="films" element={<Films/>}/>
          <Route path="/people" element={<People/>}/>
          <Route path="/planets" element={<Planets/>}/>
          <Route path="/species" element={<Species/>}/>
          <Route path="/starships" element={<Starships/>}/>
          <Route path="/vehicles" element={<Vehicles/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
