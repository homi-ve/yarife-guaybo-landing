import React from 'react';
import iconBulb from '../../assets/images/icons/Recurso 40.png';
import iconBriefcase from '../../assets/images/icons/Recurso 41.png';
import quotationMarks from '../../assets/images/icons/Recurso 52.png';
import personAbout from '../../assets/images/yarife/2.webp';
import './About.css';

const About = () => {
  return (
    <section id="sobre-mi" className="about-section">
      <div className="about-grid">
        {/* Columna izquierda */}
        <div className="about-left">
          <div className="headline">
            <span className="headline-line">CONECTA CON QUIEN TE GUÍA CON PROPÓSITO</span>
            
            {/* Iconos de fondo grandes */}
            <img src={iconBulb} alt="" className="bg-bulb" />
            <img src={iconBriefcase} alt="" className="bg-briefcase" />
          </div>
          <img className="about-person" src={personAbout} alt="Yarife Vallenilla" />

        </div>
        <div className='tip-container tip-container--sm'>
            Te ayudaré a crear una marca y todos tus infoproductos
            <span>Empieza hoy a posicionarte y monetizar tu expertise.</span>
            <img src={quotationMarks}/>
        </div>
        {/* Columna derecha */}
        <div className="about-right">
          <p className="quote">
            "<span>Tu conocimiento es poder.<br/> Vamos a transformarlo juntos.</span>"
          </p>

          <p className="about-paragraph">
            Soy <strong>Yarife Vallenilla</strong>, diseñadora gráfica, facilitadora y especialista en e-learning.
          </p>
          <p className="about-paragraph">
            Desde hace 4 años ayudo a profesionales y marcas a transformar su conocimiento en proyectos digitales
            que <span >educan</span>, <span >conectan</span> y <span >venden</span> con propósito.
          </p>
          <div className='tip-container tip-container--md'>
              Te ayudaré a crear una marca y todos tus infoproductos
              <span>Empieza hoy a posicionarte y monetizar tu expertise.</span>
              <img src={quotationMarks}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;