import React from 'react';  
import { useParams } from 'react-router-dom';
import logements from '../../logements.json';  
import Caroussel from '../Components/Logements/Caroussel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faStar } from '@fortawesome/free-solid-svg-icons'; 
import Informations from '../Components/Logements/CollapseInfo.jsx';
import Error from '../Pages/Error.jsx';



const Logement = () => {
  const { id } = useParams(); // Récupération de l'ID depuis l'URL


  // Chercher le logement correspondant dans le fichier logements.json
  const logement = logements.find(logement => logement.id === id);

    // Vérification si l'ID est manquant
      if (!logement || !logement.id || logement.id === '') {
    return <Error />; // Redirige vers la page d'erreur si l'ID est invalide ou manquant
  }

  return (
  <div className="logement-container">
      {/* Affichage du composant caroussel avec les images de chaque logement*/}
      <Caroussel pictures={logement.pictures} />

      {/* Affichage des informations de l'hôte */}
      <div className="host-info">
      <p className="host-name">{logement.host.name}</p>
      <img src={logement.host.picture} alt={logement.host.name} className="host-picture" />
      </div>

       {/* Affichage du rating */}
      <div className="rating">
          {Array.from({ length: 5 }, (_, index) => ( //*Création tableau 5 éléments et reçoit l'index (0 à 4) *//
            <FontAwesomeIcon key={index} icon={faStar} //* key = icone = index *//
              className={index < logement.rating ? "filled-star" : "empty-star"} />//? compare l'index star avec index logement.rating pour appliquer si star empty ou non//
          ))}
      </div>
      
      {/* Affichage du titre et lieu de chaque logement */}
      <h1 className="logement_title">{logement.title}</h1>
      <p className="location">{logement.location}</p>
      
       {/* Affichage des quartiers de chaque logement */}
      <div className="tags-container">
        {logement.tags.map((tag, index) => (
          <button key={index} className="tag-button">{tag}</button>
        ))}
      </div>

        {/* Affichage des informations : description et équipements */}
      <Informations description={logement.description} equipments={logement.equipments} />
      
    </div>
  
  );
};

export default Logement;