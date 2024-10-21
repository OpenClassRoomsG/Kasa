import React from 'react';
import "./banner.css";

/* Composant de la bannière image+texte */
function Banner({ picture,text }) {
  return (
    <div className='banner'>
      <img src={picture} alt="Image Rochers Bord de Mer" className='banner-image'/>
      <h2 className='banner-text'>{text}</h2>
    </div>
  );
}

export default Banner;