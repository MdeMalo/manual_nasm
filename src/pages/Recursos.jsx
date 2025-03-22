import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import '../styles/Recursos.css';

const Recursos = () => {
    return (
        <div className="recursos-page">
            <Navbar />
            <div className="recursos">
                <h1 className="recursos__title">Recursos y Enlaces Útiles</h1>
                <p className="recursos__intro">
                    Encuentra aquí una selección de recursos, tutoriales y enlaces para profundizar en el aprendizaje del ensamblador NASM, la integración con otros lenguajes y temas relacionados.
                </p>

                <section className="recursos__section">
                    <h2 className="recursos__subtitle">Documentación Oficial</h2>
                    <p className="recursos__text">
                        Accede a la documentación oficial de NASM y otros manuales de referencia para obtener información detallada y actualizada.
                    </p>
                    <ul className="recursos__list">
                        <li>
                            <a
                                href="https://www.nasm.us/doc/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="recursos__link"
                            >
                                Documentación NASM
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://gcc.gnu.org/onlinedocs/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="recursos__link"
                            >
                                Documentación GCC
                            </a>
                        </li>
                    </ul>
                </section>

                <section className="recursos__section">
                    <h2 className="recursos__subtitle">Tutoriales y Cursos</h2>
                    <p className="recursos__text">
                        Aprende mediante tutoriales en video, cursos en línea y blogs especializados que abordan tanto los conceptos básicos como avanzados del ensamblador.
                    </p>
                    <ul className="recursos__list">
                        <li>
                            <a
                                href="https://www.youtube.com/results?search_query=nasm+tutorial"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="recursos__link"
                            >
                                Tutoriales en YouTube
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.udemy.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="recursos__link"
                            >
                                Cursos en Udemy
                            </a>
                        </li>
                    </ul>
                </section>

                <section className="recursos__section">
                    <h2 className="recursos__subtitle">Libros Recomendados</h2>
                    <p className="recursos__text">
                        Consulta una selección de libros y e-books que te ayudarán a profundizar en el mundo del ensamblador y la programación de bajo nivel.
                    </p>
                    <ul className="recursos__list">
                        <li>
                            <a
                                href="https://www.amazon.com/Programming-Assembly-Language-X86/dp/0133975065"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="recursos__link"
                            >
                                Programming from the Ground Up
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.amazon.com/Assembly-Language-Interface-Programmers-Computer/dp/0136150045"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="recursos__link"
                            >
                                Assembly Language for x86 Processors
                            </a>
                        </li>
                    </ul>
                </section>

                <section className="recursos__section">
                    <h2 className="recursos__subtitle">Comunidades y Foros</h2>
                    <p className="recursos__text">
                        Participa en foros y comunidades en línea donde puedes compartir conocimientos, resolver dudas y colaborar en proyectos.
                    </p>
                    <ul className="recursos__list">
                        <li>
                            <a
                                href="https://stackoverflow.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="recursos__link"
                            >
                                Stack Overflow
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.reddit.com/r/Assembly/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="recursos__link"
                            >
                                Reddit: r/Assembly
                            </a>
                        </li>
                    </ul>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default Recursos;
