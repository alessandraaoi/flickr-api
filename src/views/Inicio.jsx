import React from 'react'
import GalleryOne from './GalleryOne'
import { Link } from 'react-router-dom'
import { TiSocialFlickr } from "react-icons/ti";

function Inicio() {
  
  return (
    <>
    <div className='inicio__div'>
    <h1 className='inicio__title'>Welcome to this gallery!</h1> <br/>
    <button type='button' className='inicio__button'><Link to = '/gallery' element = {<GalleryOne/>} className='inicio__link'>Click to see more!</Link></button>
    <div className='inicio__divFooter'><p className='inicio__divText'>By Flickr Api <TiSocialFlickr /></p></div>
    </div>
    </>
  )
}

export default Inicio
