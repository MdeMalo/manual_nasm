import React, { useState, useEffect } from 'react';
import '../styles/Ejemplos.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const EjemploCodigo = ({ filename }) => {
    const [codigo, setCodigo] = useState('');

    useEffect(() => {
        fetch(`/nasm/${filename}`) // Asegura que los archivos están en 'public/nasm/'
            .then((response) => {
                if (!response.ok) throw new Error(`No se pudo cargar ${filename}`);
                return response.text();
            })
            .then((data) => setCodigo(data))
            .catch((error) => console.error(error));
    }, [filename]);

    return (
        <div className="codigo-container">
            <h2 className="codigo-title">{filename}</h2>
            <SyntaxHighlighter language="nasm" style={dracula} className="codigo-box" showLineNumbers>
                {codigo || "Cargando..."}
            </SyntaxHighlighter>
            <a href={`/nasm/${filename}`} download className="codigo-link">📥 Descargar {filename}</a>
        </div>
    );
};

const Ejemplos = () => {
    return (
        <div className='ejemplos-page'>
            <Navbar />
            <div className="ejemplos">
                <h1 className="ejemplos__title">Ejemplos de Código NASM</h1>
                <p className="ejemplos__description">
                    Aquí puedes ver ejemplos de código en NASM, estudiarlos y descargarlos.
                </p>
                <EjemploCodigo filename="test.asm" />
                <EjemploCodigo filename="ciclo.asm" />
                <EjemploCodigo filename="ciclo_suma.asm" />
                <EjemploCodigo filename="calculadora.asm" />
            </div>
            <Footer />
        </div>
    );
};

export default Ejemplos;
