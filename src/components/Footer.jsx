import React from "react";
import "../styles.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} Cabinet Médical – Tous droits
          réservés.
        </p>
        <p>Site développé avec React et Firebase</p>
      </div>
    </footer>
  );
};

export default Footer;
