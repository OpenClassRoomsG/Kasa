import React from 'react';
import './galleryCards.css';
import logements from '../../../logements.json';
import {Link} from "react-router-dom"; // Link = navigation

const GalleryCards = () => {
  return (
    <div className="gallery-container">
      {logements.map((logement) => ( // map = Accès aux entrées de chaque logement json (tableau)
        <Link to={`/logement/${logement.id}`} key={logement.id} className="card"> {/* clé (id) unique pour chaque logement */}
          <img src={logement.cover} alt={logement.title} className="card-image" /> 
          <h3 className="card-title">{logement.title}</h3>
        </Link>
      ))}
    </div>
  );
};
export default GalleryCards;
