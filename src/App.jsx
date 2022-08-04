
import { useEffect, useState } from 'react';
import './App.css';
import Accion from './componentes/genero/Accion';
import Comedia from './componentes/genero/Comedia';
import Drama from './componentes/genero/Drama';
import Romance from './componentes/genero/Romance';
import Terror from './componentes/genero/Terror';
import Navbar from './componentes/Navbar';
import Home from './componentes/genero/Home';

import {Routes, Route } from 'react-router-dom';
import Footer from './componentes/Footer';
import Pelicula from './componentes/Pelicula';

function App() {

  const [peliculas, setPeliculas] = useState([]);

  const getPeliculas = async () => {

    const response = await fetch('https://api.tvmaze.com/shows');
    const data = await response.json();
    setPeliculas(data);
  }

  useEffect(() =>{

      getPeliculas();

  },[])
  
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="terror" element={<Terror peliculas={peliculas} genero='Horror'/>} />
        <Route path="drama" element={<Drama peliculas={peliculas} genero='Drama'/>} />
        <Route path="accion" element={<Accion peliculas={peliculas} genero='Action' />} />
        <Route path="comedia" element={<Comedia peliculas={peliculas} genero='Comedy' />} />
        <Route path="romance" element={<Romance peliculas={peliculas} genero='Romance'/> } />
        <Route path="movie/:id" element={<Pelicula/>} />
      </Routes>

      {/* <Footer/> */}
    </div>
  );
}

export default App;
