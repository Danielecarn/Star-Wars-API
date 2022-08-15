import { Outlet } from "react-router-dom"

import './app.css'
import Navbar from "./components/styles/Navbar"

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default App
