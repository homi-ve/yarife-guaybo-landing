import React from 'react';
import iconBulb from '../../assets/images/icons/Recurso 40.png';
import iconArrow from '../../assets/images/icons/Recurso 46.png';
import yarifeImage from '../../assets/images/yarife/1.webp';
import './Hero.css';

const Hero = () => {
  const openWhatsApp = () => {
    const phone = '584242429016';
    const text = encodeURIComponent('Hola Yarife, quiero reservar una asesoría.');
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  return (
    <section id="inicio" className="hero">
     

      {/* Lado izquierdo - Morado */}
      <div className="hero-left">
        {/* Patrón de ondas */}
        <div className="wave-pattern "></div>

        {/* Contenido */}
        <div className="hero-content">
          <h1 className="hero-headline">
            DESATA EL <span className="power">POWER</span> DETRÁS DE TUS IDEAS
          </h1>
          
          <p className="hero-description">
            Transforma tu conocimiento en una marca profesional que educa, conecta y vende.
          </p>
          
          <div className='cta-container'>
          <button onClick={openWhatsApp} className="cta-button">
            Quiero una asesoría
          </button>
          <span className='cta-comment'>Cupos limitados cada mes</span>
          </div>
        </div>
      </div>
      {/* Lado derecho - Naranja */}
      <div className="hero-right">
        {/* Círculo de fondo */}
      <div className="circle-bg">
         {/* Iconos decorativos: bombillo y flecha (assets) */}
        <img src={iconBulb} alt="" className="hero-icon lightbulb-icon" />
        <img src={iconArrow} alt="" className="hero-icon arrow-icon" />
        {/* Imagen de la persona */}
        <img className="person-image" src={yarifeImage} alt="Yarife Vallenilla" />
        {/* Círculo pequeño */}
        <div className="circle-bg circle-bg-small"></div>
      </div>
        
      </div>
    </section>
  );
};

export default Hero; 