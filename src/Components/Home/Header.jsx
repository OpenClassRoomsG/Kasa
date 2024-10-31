import React from 'react';
import "./header.css";
import logoKasa from '../../assets/Icons/logo.png';
import { NavLink } from 'react-router-dom';



function Header() {
  return (
    <header className="header">
      <img src={logoKasa} alt="Logo Kasa" className="logo" />
      <nav>
        <ul>
          <li>
            <NavLink to="/" activeclassname="active">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/about" activeclassname="active">A propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;



