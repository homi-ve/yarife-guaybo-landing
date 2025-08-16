import React from 'react';
import arrow from '../../assets/images/icons/Recurso 46.png';
import yarifeImage from '../../assets/images/yarife/3.webp';
import './Contact.css';

const Contact = () => {

  const openWhatsApp = () => {
    const phone = '584242429016';
    const text = encodeURIComponent('Hola Yarife, quiero reservar una asesoría.');
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  return (
    <section id="contacto" className="section contact-section ">
      <div className='container'>
        <h2 className='contact-headline'>Tu marca puede crecer<br/> con POWER.</h2>
        <h3 className='contact-headline-tag'>¿Listo para empezar?</h3>
        <div className='contact-container'>
          <div className='contact-container__left'>
            <div className='tag-container'>
                <button onClick={openWhatsApp} className='tag'>Quiero más información</button>
                <img src={arrow} alt="Flecha" />
            </div>
            <div className='contacts'>
              <div className='contact'>
                  <p>Correo</p>
                  <p>yarifepower@gmail.com</p>
                </div>
                <div className='contact'>
                  <p>Número de teléfono</p>
                  <p>+58 424 2429016</p>
                </div>
            </div>
          </div>
          <div className='decorator'>
            <div className='circle'></div>
            <img className="image" src={yarifeImage} alt="Yarife Vallenilla" />
          </div>
        </div>
      </div>

    </section>
  );
};

export default Contact; 