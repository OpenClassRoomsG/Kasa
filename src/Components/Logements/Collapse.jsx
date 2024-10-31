import React from 'react';
import '../../Components/Logements/collapse.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Collapse = ({ title, content }) => {
  return (
    <details className="collapse-info">
      <summary className="toggle-summary">
        {title}
        <span className="chevron-icon">
          <FontAwesomeIcon icon={faChevronDown} className="closed-chevron" />
          <FontAwesomeIcon icon={faChevronUp} className="open-chevron" />
        </span>
      </summary>
      {typeof content === 'string' ? (
        <p className="info-text">{content}</p>
      ) : (
        <ul className="equipments-list">
          {content.map((item, index) => (
            <li key={index} className="equipement-item">{item}</li>
          ))}
        </ul>
      )}
    </details>
  );
};

export default Collapse;
