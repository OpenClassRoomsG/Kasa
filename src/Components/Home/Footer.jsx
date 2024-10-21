import React from 'react';
import "../../Components/Home/footer.css";
import footerlogo from "../../assets/Icons/logo-kasa-footer.png";



const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
         {/* Logo principal */}
        <img src={footerlogo} alt="Logo" className="footer-logo" />
         {/* Ajout de l'icône */}
         <div className="footer-icon-text">
        <h4 className="footer-title">&#169;&nbsp;&nbsp;2020 Kasa. All rights reserved</h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;