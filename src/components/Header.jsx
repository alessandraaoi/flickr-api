import React from 'react'
import {Link} from 'react-router-dom'


function Header() {
  return ( 
    <header className='header'>
        <h1 className='header__titulo'>Trainee Gallery</h1>
        <ul className='header__list'>
          <li className='header__listItem'><Link to = {'/'} className='header__link'>Inicio</Link></li>
          <li className='header__listItem'><Link to = {'/gallery'} className='header__link'>Gallery 1</Link></li>
        </ul>
    </header>
  )
}

export default Header
