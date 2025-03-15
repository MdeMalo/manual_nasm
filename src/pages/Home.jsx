import React from 'react';
import logo from '../assets/logo_nasm.png';
import imgManual from '../assets/manual_nasm.png';
import '../styles/Home.css';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer/Footer.jsx';

const Home = () => {
    return (
        <div className="home-page">
            <Header />
            <Navbar />
            {/* Encabezado y Presentación */}
            <header className="home-header">
                {/* Inserta aquí el logo o imagen representativa */}
                <img src={logo} alt="Logo del Manual de Ensamblador" className="imgLogo" />
                <h1 className="home-title">Manual de Ensamblador NASM x86</h1>
            </header>

            {/* Menú o Índice Principal */}
            <nav className="main-menu">
                <ul>
                    <li><a href="#introduccion">Introducción</a></li>
                    <li><a href="#instalacion">Instalación y Configuración</a></li>
                    <li><a href="#ejemplos">Ejemplos Prácticos</a></li>
                    <li><a href="#avanzados">Temas Avanzados</a></li>
                    <li><a href="#recursos">Recursos y Enlaces</a></li>
                    <li><a href="#contacto">Contacto y Ayuda</a></li>
                </ul>
            </nav>

            {/* Sección de Imagen o Video Introductorio */}
            <section className="intro-media">
                {/* Puedes sustituir la imagen por un video si lo deseas */}
                <img src={imgManual} alt="Introducción NASM" className="intro-image" />
            </section>

            {/* Llamada a la Acción (CTA) */}
            <section className="cta-section">
                <a href="#ejemplos" className="cta-button">Empezar Ahora</a>
            </section>

            {/* Sección de Bienvenida e Introducción General */}
            <section className="welcome-section">
                <h2>Bienvenido</h2>
                <p>
                    Bienvenido al Manual de Ensamblador NASM x86, tu recurso integral para adentrarte en el mundo del lenguaje ensamblador.
                    Aquí descubrirás desde los fundamentos hasta técnicas avanzadas para dominar el control del hardware.
                </p>
                <p>
                    NASM (Netwide Assembler) es un ensamblador de código abierto para la arquitectura x86 que te permite escribir
                    programas a un nivel muy cercano al hardware, ofreciendo un control preciso y optimización del rendimiento. Este manual
                    te guiará paso a paso, mostrando desde cómo configurar tu entorno hasta la ejecución de ejemplos prácticos.
                </p>
                <p>
                    Este manual está diseñado para principiantes, intermedios y avanzados. Encontrarás recursos y ejemplos adaptados a tu
                    ritmo de aprendizaje, con el objetivo de enseñarte los fundamentos, proporcionarte ejemplos prácticos, facilitar la
                    integración con GCC y fomentar el autoaprendizaje.
                </p>
            </section>

            {/* Sección de Historia de NASM */}
            <section className="history-section">
                <h2>Historia de NASM</h2>
                <p>
                    NASM (Netwide Assembler) fue lanzado en 1996 como una herramienta de ensamblador para la arquitectura x86.
                    Su creación respondió a la necesidad de contar con un ensamblador portátil, eficiente y de código abierto que pudiera ser
                    utilizado en diversas plataformas.
                </p>
                <p>
                    A lo largo de los años, NASM ha evolucionado significativamente, incorporando mejoras y extensiones que lo han
                    consolidado como uno de los ensambladores más populares y robustos en el ámbito de la programación de bajo nivel.
                    Desde proyectos académicos hasta aplicaciones industriales, NASM ha sido fundamental para quienes buscan un control
                    total del hardware y optimización en el rendimiento.
                </p>
            </section>

            <Footer />

            {/* Pie de Página */}
            <footer className="home-footer">
                <p>&copy; {new Date().getFullYear()} Manual de Ensamblador NASM x86. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

export default Home;
