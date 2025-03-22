import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import '../styles/Contacto.css';

const Contacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_xw9lh23',   // Reemplaza con tu Service ID
      'template_2znxltf',  // Reemplaza con tu Template ID  
      form.current,
      'BQlaa6uv80qWU7R54'       // Reemplaza con tu User ID o Public Key
    )
      .then((result) => {
          alert('Mensaje enviado correctamente');
          e.target.reset();
      }, (error) => {
          alert('Error al enviar el mensaje, intenta de nuevo ' + error.text);
          console.error(error.text);
      });
  };

  return (
    <div className="contacto-page">
      <Navbar />
      <div className="contacto">
        <h1 className="contacto__title">Contacto</h1>
        <p className="contacto__intro">
          Si tienes alguna duda, sugerencia o necesitas ayuda, no dudes en ponerte en contacto con nosotros.
        </p>
        
        <section className="contacto__section">
          <h2 className="contacto__subtitle">Información de Contacto</h2>
          <p className="contacto__text">
            Correo electrónico:{" "}
            <a href="mailto:malomtzjoseangel@gmail.com" className="contacto__link">
              malomtzjoseangel@gmail.com
            </a>
          </p>
          <p className="contacto__text">
            Teléfono:{" "}
            <a href="tel:+527731431609" className="contacto__link">
              +52 7731431609
            </a>
          </p>
        </section>

        <section className="contacto__section">
          <h2 className="contacto__subtitle">Formulario de Contacto</h2>
          <form ref={form} onSubmit={sendEmail} className="contacto__form">
            
            <input className="contacto__input" type="text" id="name" name="name" placeholder="Tu nombre" required />

            <input className="contacto__input" type="email" id="email" name="email" placeholder="Tu email" required />

            <textarea className="contacto__textarea" id="message" name="message" placeholder="Tu mensaje" rows="5" required></textarea>


            <button type="submit" className="contacto__button">
              Enviar Mensaje
            </button>
          </form>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Contacto;
