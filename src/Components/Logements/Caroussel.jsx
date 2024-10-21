import React, { useState } from 'react';
import './Caroussel.css'; 
import arrowleft from "../../assets/Icons/arrow_left.png";
import arrowright from "../../assets/Icons/arrow_right.png";

const Caroussel = ({ pictures }) => { {/* la fonction accède aux "pictures" */}
  const [currentIndex, setCurrentIndex] = useState(0);//* Index des pictures utilisées et remis à zéro par useState*//

  // Fonction pour passer à l'image suivante
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  // Fonction pour passer à l'image précédente
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
  };

  return (
    <div className="caroussel-container">
      <img src={pictures[currentIndex]} alt="Logement" className="caroussel-image" /> {/* Props "currentsIndex" qui stocke l'index de la picture affiché */}


       {/* Affichage des flèches et du compteur seulement s'il y a plus d'une image */}
    {pictures.length > 1 && (
      <>
        <img className="arrow arrow-left" src={arrowleft} alt="Flèche de gauche" onClick={prevImage} />
        <img className="arrow arrow-right" src={arrowright} alt="Flèche de droite" onClick={nextImage} />
        

         {/* Ajout du compteur */}
         <div className="caroussel-compteur"> 
        {currentIndex + 1} / {pictures.length} {/*  Index du tableau (0) +1 / nbre total des images  */}
      </div>
      </>
      )}
    </div>
  );
};

export default Caroussel;
