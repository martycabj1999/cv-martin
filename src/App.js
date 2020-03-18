import React from 'react';
import logo from './logo.svg';
import './App.css';
import Experiencia from './componentes/Experiencia';
import About from './componentes/About';
import Navbar from './componentes/Navbar';
import Educacion from './componentes/Educacion';
import Skills from './componentes/Skills';
import Intereses from './componentes/Intereses';
import Proyectos from './componentes/Proyectos';

function App() {
  return (
    <div id="page-top">
          <Navbar />
        <div class="container-fluid p-0">
          <About />
        <hr class="m-0" />
          <Experiencia />
        <hr class="m-0"/>
          <Educacion />
        <hr class="m-0"/>
          <Skills />
        <hr class="m-0"/>
          <Intereses />
        <hr class="m-0"/>
          <Proyectos />
        </div>
    </div>
  );
}

export default App;
