import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import logo2 from "../assets/logo192.png";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Estado para controlar el scroll
  const menuRef = useRef(null); // Referencia para el menú

  // Hook para detectar el desplazamiento de la página
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // Cambia 50 por el valor que necesites
        setIsScrolled(true); // Se vuelve sólido
      } else {
        setIsScrolled(false); // Se vuelve transparente
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Limpiar el evento al desmontar el componente
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hook para detectar clics fuera del menú
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Limpiar el evento al desmontar el componente
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuRef]);

  return (
    <div className="boxC">
      <nav
        className={`rectangle ${isScrolled ? "solid" : "transparent"}`}
        role="navigation"
        aria-label="main navigation"
        ref={menuRef} // Asignar la referencia al menú
      >
        <div className="navbar-brand">
          <NavLink to="/" className="navbar-item">
            <div className="logoPosition">
              <img src={logo2} alt="logo" />
            </div>
          </NavLink>
        </div>

        {/* Botones principales de la navbar */}
        <div className={`divsButtons ${isMenuOpen ? "is-active" : ""}`}>
          <NavLink to="/Introduccion" className="div">
            Introducción
          </NavLink>
          <NavLink to="#instalacion" className="text-wrapper-2">
            Instalación y Configuración
          </NavLink>
          <NavLink to="#ejemplos" className="text-wrapper-3">
            Ejemplos Prácticos
          </NavLink>
          <NavLink to="#avanzados" className="text-wrapper-4">
            Temas Avanzados
          </NavLink>
          <NavLink to="#recursos" className="text-wrapper-5">
            Recursos y Enlaces
          </NavLink>
          <NavLink to="#contacto" className="text-wrapper-6">
            Contacto y Ayuda
          </NavLink>
        </div>

        {/* Botón de menú hamburguesa */}
        <div
          className={`navbar-burger burger ${isMenuOpen ? "is-active" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="menu"
          aria-expanded={isMenuOpen ? "true" : "false"}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>

        {/* Menú desplegable para pantallas móviles */}
        <div className={`divsButtons-mobile ${isMenuOpen ? "is-active" : ""}`}>
          <NavLink to="#introduccion" className="div">
            Introducción
          </NavLink>
          <NavLink to="#instalacion" className="text-wrapper-2">
            Instalación y Configuración
          </NavLink>
          <NavLink to="#ejemplos" className="text-wrapper-3">
            Ejemplos Prácticos
          </NavLink>
          <NavLink to="#avanzados" className="text-wrapper-4">
            Temas Avanzados
          </NavLink>
          <NavLink to="#recursos" className="text-wrapper-5">
            Recursos y Enlaces
          </NavLink>
          <NavLink to="#contacto" className="text-wrapper-6">
            Contacto y Ayuda
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
