import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

//componentes
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CadastroBolo from './pages/CadastroBolo';
import ListaBolo from './pages/ListaBolo';

//BrowserRouter -> indica  que tera uma config de rotas
//Rotas -> indica que tera uma lista de rotas
//Router -> indica uma rotas de um respectivo componente

/* Rotas */
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  {/* /* Rotas */
    /* Componentes */}

    <BrowserRouter>
      <Header />{/*1*/}

   
    <Routes>{/*2*/}
      <Route path='/' element={<Home/>} /> {/*Pagina principal*/}
      <Route path='cadastro/Bolo' element={<CadastroBolo/>} /> {/*Pagina cadastro bolo*/}
      <Route path='lista/Bolo' element={<ListaBolo/>} /> {/*Pagina lista bolo*/}
    </Routes>


    <Footer/>{/*3*/}

    </BrowserRouter>

  </React.StrictMode>,
)
