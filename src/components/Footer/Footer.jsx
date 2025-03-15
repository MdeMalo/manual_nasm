import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2>DESAFÍO NASM</h2>
        <nav className="footer-nav">
          <NavLink to="#introduccion">Introducción</NavLink>
          <NavLink to="#instalacion">Instalación y Configuración</NavLink>
          <NavLink to="#ejemplos">Ejemplos Prácticos</NavLink>
          <NavLink to="#avanzados">Temas Avanzados</NavLink>
          <NavLink to="#recursos">Recursos y Enlaces</NavLink>
          <NavLink to="#contacto">Contacto y Ayuda</NavLink>
        </nav>
        <p>
          El Desafío NASM es una experiencia única que celebra la pasión por la
          programación en ensamblador. Reunimos a programadores de todos los niveles, con eventos de calidad,
          competidores internacionales y nacionales, inscripciones accesibles y recompensas emocionantes.
          Es más que una competencia: es un desafío, una conexión y una celebración de cada
          línea de código escrita.{" "}
          <span className="highlight">
            Atrévete a explorar el territorio NASM.
          </span>
        </p>
        <p className="footer-contact">
          Contacto:{" "}
          <a href="mailto:malomtzjoseangel@gmail.com">malomtzjoseangel@gmail.com</a>
        </p>
        <p className="footer-copyright">
          © {new Date().getFullYear()} Desafío NASM. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
