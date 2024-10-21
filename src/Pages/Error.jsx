import React from 'react';
import { Link } from 'react-router-dom';
import '../Components/Error/error.css';

function Error() {
  return (
    <div className="error-page">
      <h1>404</h1>
      <p>Oups ! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="retour-accueil">
        Retournez sur la page d'accueil
      </Link>
    </div>
  );
}

export default Error;
