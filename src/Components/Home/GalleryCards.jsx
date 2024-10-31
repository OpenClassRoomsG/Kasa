import React from 'react';
import './galleryCards.css';
import logements from '../../../logements.json';
import {Link} from "react-router-dom"; 

const GalleryCards = () => {
  return (
    <div className="gallery-container">
      {logements.map((logement) => ( 
        <Link to={`/logement/${logement.id}`} key={logement.id} className="card"> 
          <img src={logement.cover} alt={logement.title} className="card-image" /> 
          <h3 className="card-title">{logement.title}</h3>
        </Link>
      ))}
    </div>
  );
};
export default GalleryCards;
