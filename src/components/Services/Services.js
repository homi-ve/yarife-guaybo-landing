import React from 'react';
import centerCharacter from '../../assets/images/icons/person.png';
import iconBulb from '../../assets/images/icons/Recurso 40.png';
import iconBriefcase from '../../assets/images/icons/Recurso 41.png';
import iconHand from '../../assets/images/icons/Recurso 42.png';
import iconPerson from '../../assets/images/icons/Recurso 43.png';
import arrow45 from '../../assets/images/icons/Recurso 45.png';
import arrow46 from '../../assets/images/icons/Recurso 46.png';
import arrow47 from '../../assets/images/icons/Recurso 47.png';
import arrow48 from '../../assets/images/icons/Recurso 48.png';
import './Services.css';


const Services = () => {

  return (
    <section id="servicios" className="section">
      <div className="container">
        {/* Cinta superior inclinada + pill y banner "SERVICIOS" */}
        <div className="services-banner">
          <div className="top-ribbon">
            <span>ACTIVA EL POWER DE TUS PROYECTOS</span>
          </div>
          <div className="under-ribbon">
            <span className="with-pill">CON MIS</span>
            <span className="big-tag">SERVICIOS</span>
          </div>
        </div>
        <div className="services-layout">
          <div className="services-left">
          <div className='service-item service-item--1'>
            <div className="service-item--pill right">
              <span>BRANDING</span>
              <img src={iconHand} alt="Branding icon" className="icon" />
            </div>
            <div className="service-item--content soft">
            <p><strong>Crea una marca con identidad y propósito</strong></p>
            </div>
            </div>
            <div className='service-item service-item--3'>
            <div className="service-item--pill ">
              <span>COMUNICAR</span>
              <img src={iconPerson} alt="Comunicar icon" className="icon " />
            </div>
            <div className="service-item--content soft">
            <p><strong>Estrategia de contenido visual y educativo</strong></p>
            <p><strong>Crear piezas coherentes y estratégicas</strong></p>    
            </div>
            </div>
            
          </div>

          <div className="services-center">
            <div className="quiero">¿Quiero?</div>
            <img src={centerCharacter} alt="Quiero" className="center-character" />
            <div className="arrows">
              <img src={arrow45} alt="arrow" className="arrow-img arrow-tl" />
              <img src={arrow46} alt="arrow" className="arrow-img arrow-bl" />
              <img src={arrow47} alt="arrow" className="arrow-img arrow-br" />
              <img src={arrow48} alt="arrow" className="arrow-img arrow-tr" />
            </div>
          </div>

          <div className="services-right">
            <div className='service-item service-item--2'>
            <div className="service-item--pill ">
              <span>CLARIDAD</span>
              <img src={iconBulb} alt="Claridad icon" className="icon" />
            </div>
            <div className="service-item--content soft">
              <p><strong>Asesorías creativas para desbloquear tu idea</strong></p>
              <p><strong>Convertir ideas enplanes de acción y MVP</strong></p>
            </div>
            </div>
            <div className='service-item service-item--4'>
            <div className="service-item--pill right">
              <span>VENDER</span>
              <img src={iconBriefcase} alt="Vender icon" className="icon " />
            </div>
            <div className="service-item--content soft">
            <p><strong>Diseño de recursos digitales (ebooks, guías)</strong></p>
            <p><strong>Productos listos para vender y escalar</strong></p>
            </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services; 