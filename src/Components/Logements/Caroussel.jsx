import React, { useState } from 'react';
import './Caroussel.css'; 
import arrowleft from "../../assets/Icons/arrow_left.png";
import arrowright from "../../assets/Icons/arrow_right.png";

const Caroussel = ({ pictures }) => { 
  const [currentIndex, setCurrentIndex] = useState(0);

 
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
  };

  return (
    <div className="caroussel-container">
      <img src={pictures[currentIndex]} alt="Logement" className="caroussel-image" /> 


       
    {pictures.length > 1 && (
      <>
        <img className="arrow arrow-left" src={arrowleft} alt="Flèche de gauche" onClick={prevImage} />
        <img className="arrow arrow-right" src={arrowright} alt="Flèche de droite" onClick={nextImage} />
        

         {/* Ajout du compteur */}
         <div className="caroussel-compteur"> 
        {currentIndex + 1} / {pictures.length} 
      </div>
      </>
      )}
    </div>
  );
};

export default Caroussel;
