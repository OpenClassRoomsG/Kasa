import React from 'react';
import Collapse from '../Logements/Collapse.jsx';
import "../../Components/About/infoAbout.css";

function InfoApropos() {
  const infos = [
    { title: 'Fiabilité', text: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes informations sont régulièrement vérifiées par nos équipes.' },
    { title: 'Respect', text: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.' },
    { title: 'Service', text: 'Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. Contactez-nous si vous avez la moindre question.' },
    { title: 'Sécurité', text: 'La sécurité est la priorité de Kasa aussi bien pour nos hôtes que pour les voyageurs. Chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à nos hôtes et aux locataires, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.' }
  ];

  return (
    <div className="info-apropos">
      {infos.map((info, index) => (
        <div className='info-section' key={index}>
        <Collapse  title={info.title} content={info.text} />
        </div>
      ))}
    </div>
  );
}

export default InfoApropos;

