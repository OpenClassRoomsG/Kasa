import React from 'react';  
import { useParams } from 'react-router-dom';
import logements from '../../logements.json';  
import Caroussel from '../Components/Logements/Caroussel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faStar } from '@fortawesome/free-solid-svg-icons'; 
import Informations from '../Components/Logements/LogementInfo.jsx';
import Error from '../Pages/Error.jsx';



const Logement = () => {
  const { id } = useParams(); 


  
  const logement = logements.find(logement => logement.id === id);

    
      if (!logement || !logement.id || logement.id === '') {
    return <Error />; 
  }

  return (
  <div className="logement-container">
    
      <Caroussel pictures={logement.pictures} />

      
      <div className="host-info">
      <p className="host-name">{logement.host.name}</p>
      <img src={logement.host.picture} alt={logement.host.name} className="host-picture" />
      </div>

      
      <div className="rating">
          {Array.from({ length: 5 }, (_, index) => ( 
            <FontAwesomeIcon key={index} icon={faStar} 
              className={index < logement.rating ? "filled-star" : "empty-star"} />
          ))}
      </div>
      
   
      <h1 className="logement_title">{logement.title}</h1>
      <p className="location">{logement.location}</p>
      
       
      <div className="tags-container">
        {logement.tags.map((tag, index) => (
          <button key={index} className="tag-button">{tag}</button>
        ))}
      </div>

       
      <Informations description={logement.description} equipments={logement.equipments} />
      
    </div>
  
  );
};

export default Logement;