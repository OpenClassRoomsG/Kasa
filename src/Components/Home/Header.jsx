import React from 'react';
import "./header.css";
import logoKasa from '../../assets/Icons/logo.png';
import { NavLink } from 'react-router-dom';


/*Composant de l'entête*/
function Header() {
  return (
    <header className="header">
      <img src={logoKasa} alt="Logo Kasa" className="logo" />
      <nav>
        <ul>
          <li>
            <NavLink to="/" activeclassname="active">Accueil</NavLink>{/* NavLink = Pour aller sur la page Accueil/Home quand on click = devient active */}
          </li>
          <li>
            <NavLink to="/about" activeclassname="active">A propos</NavLink>{/* NavLink = Pour aller sur la page A propos quand on click = devient active */}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;



