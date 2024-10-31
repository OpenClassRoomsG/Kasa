import React from 'react';
import Collapse from '../../Components/Logements/Collapse.jsx';
import '../Logements/logementInfo.css';
import '../../../logements.json';

const Informations = ({ description, equipments }) => {
  return (
    <div className="informations-container">
      <Collapse title="Description" content={description} />
      <Collapse title="Équipements" content={equipments} />
    </div>
  );
};

export default Informations;
