import React from 'react';
import '../../Components/Logements/collapseInfo.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Informations = ({ description, equipments }) => { //*Composant Informations reçoit 2 Props* = chaîne de caractère & liste//
  return (
    <div className="informations-container">

      {/* Section pour la description */}
      <details className="description"> {/* Balise "details" HTML = section ouverte ou fermée */}
        <summary className="description-button"> {/* entête de la section = Description */}
          Description
          <FontAwesomeIcon icon={faChevronDown} className="chevron-icon closed-chevron" />
          <FontAwesomeIcon icon={faChevronUp} className="chevron-icon open-chevron" />
        </summary>
        <p className="description-text">{description}</p> {/* p visible quand détails est ouvert */}
      </details>

      {/* Section pour les équipements */}
      <details className="equipements">
        <summary className="equipements-button">
          Équipements
          <FontAwesomeIcon icon={faChevronDown} className="chevron-icon closed-chevron" />
          <FontAwesomeIcon icon={faChevronUp} className="chevron-icon open-chevron" />
        </summary>
        <ul className="equipements-list">
          {equipments.map((item, index) => ( //* .map créé un tableau *//
            <li key={index} className="equipement-item">{item}</li> //* Clé unique avec equipement et index*//
          ))}
        </ul>
      </details>
    </div>
  );
};

export default Informations;