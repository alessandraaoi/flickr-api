import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import GalleryOne from './views/GalleryOne';
import Header from './components/Header';
import Inicio from './views/Inicio';

import './index.css'
 
ReactDOM.createRoot(document.getElementById('root')).render(

  

  <Router>

    <Header/>

    <Routes>
      <Route path='/' element = {<Inicio/>}/>
      <Route path='/gallery' element = {<GalleryOne/>}/>
  
    </Routes>

  </Router>

)
