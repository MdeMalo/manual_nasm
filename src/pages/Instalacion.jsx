import React from 'react';
import '../styles/Instalacion.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';

const Instalacion = () => {
    return (
        <div className="instalacion-page">
        <div className="instalacion">
            <Navbar />
            <h1 className="instalacion__title">Guía de Instalación y Configuración</h1>
            
            <section className="instalacion__section">
                <h2 className="instalacion__subtitle">Introducción</h2>
                <p className="instalacion__text">
                    En esta sección encontrarás los pasos necesarios para instalar NASM y configurar tu entorno de desarrollo. La guía está diseñada para funcionar en diferentes sistemas operativos, tales como Windows, Linux y macOS.
                </p>
            </section>

            <section className="instalacion__section">
                <h2 className="instalacion__subtitle">Requisitos del Sistema</h2>
                <p className="instalacion__text">
                    Antes de proceder con la instalación, asegúrate de contar con:
                </p>
                <ul className="instalacion__list">
                    <li>Una computadora con conexión a internet.</li>
                    <li>Sistema operativo Windows, Linux o macOS.</li>
                    <li>Permisos de administrador (si es necesario).</li>
                    <li>Un editor de texto o IDE para escribir código.</li>
                </ul>
            </section>

            <section className="instalacion__section">
                <h2 className="instalacion__subtitle">Instalación de NASM</h2>
                <p className="instalacion__text">
                    <strong>Windows:</strong> Descarga el instalador desde el sitio oficial de NASM. Ejecuta el instalador y sigue las instrucciones en pantalla.
                </p>
                <p className="instalacion__text">
                    <strong>Linux:</strong> Puedes instalar NASM a través del gestor de paquetes de tu distribución. Por ejemplo, en Ubuntu o Debian, abre una terminal y ejecuta:
                </p>
                <pre className="instalacion__code">
                    sudo apt-get update<br />
                    sudo apt-get install nasm
                </pre>
                <p className="instalacion__text">
                    <strong>macOS:</strong> Utiliza Homebrew para instalar NASM, ejecutando:
                </p>
                <pre className="instalacion__code">
                    brew install nasm
                </pre>
            </section>

            <section className="instalacion__section">
                <h2 className="instalacion__subtitle">Configuración del Entorno</h2>
                <p className="instalacion__text">
                    Una vez instalado NASM, es recomendable configurar las variables de entorno para facilitar la compilación y ejecución de tus programas. Asegúrate de que la ruta de NASM esté incluida en la variable <code>PATH</code> de tu sistema.
                </p>
            </section>

            <section className="instalacion__section">
                <h2 className="instalacion__subtitle">Verificación de la Instalación</h2>
                <p className="instalacion__text">
                    Para verificar que NASM se instaló correctamente, abre una terminal y ejecuta:
                </p>
                <pre className="instalacion__code">
                    nasm -v
                </pre>
                <p className="instalacion__text">
                    Deberías ver la versión de NASM instalada en tu sistema.
                </p>
            </section>

            <section className="instalacion__section">
                <h2 className="instalacion__subtitle">Integración con GCC</h2>
                <p className="instalacion__text">
                    Si deseas integrar NASM con GCC para crear aplicaciones híbridas, asegúrate de tener también instalado GCC. Luego, puedes compilar tu código ensamblador y enlazarlo con programas en C de la siguiente manera:
                </p>
                <pre className="instalacion__code">
                    nasm -f elf32 codigo.asm -o codigo.o<br />
                    gcc -m32 codigo.o -o ejecutable
                </pre>
                <p className="instalacion__text">
                    Nota: La opción <code>-m32</code> es necesaria para compilar en modo de 32 bits. Asegúrate de tener instaladas las bibliotecas necesarias para compilar en 32 bits.
                </p>
            </section>
        </div>
        <Footer />
        </div>
        
    );
};

export default Instalacion;
