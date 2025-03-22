import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2>MANUAL NASM</h2>
        <nav className="footer-nav">
          <NavLink to="/introduccion">Introducción</NavLink>
          <NavLink to="/instalacion">Instalación y Configuración</NavLink>
          <NavLink to="/ejemplos">Ejemplos Prácticos</NavLink>
          <NavLink to="/avanzados">Temas Avanzados</NavLink>
          <NavLink to="/recursos">Recursos y Enlaces</NavLink>
          <NavLink to="/contacto">Contacto y Ayuda</NavLink>
        </nav>
        <p>
        NASM es una herramienta poderosa que permite a los programadores adentrarse en el mundo del ensamblador x86, comprendiendo el funcionamiento interno del hardware y optimizando el rendimiento del software. Este manual está diseñado para guiarte paso a paso, desde los conceptos fundamentales hasta técnicas avanzadas, proporcionando ejemplos prácticos y explicaciones detalladas.

Cada sección de este manual te ayudará a desarrollar habilidades clave en ensamblador, permitiéndote escribir código eficiente y entender cómo las computadoras ejecutan instrucciones a nivel más bajo.{" "}
          <span className="highlight">
          Descubre el potencial de NASM y lleva tu conocimiento de programación a otro nivel.
          </span>
        </p>
        <p className="footer-contact">
          Contacto:{" "}
          <a href="mailto:malomtzjoseangel@gmail.com">malomtzjoseangel@gmail.com</a>
        </p>
        <p className="footer-copyright">
          © {new Date().getFullYear()} Manual NASM. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
