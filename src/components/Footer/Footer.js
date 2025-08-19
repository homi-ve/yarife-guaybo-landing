import React from 'react';
import logo from '../../assets/images/logos/logo.png';
import './Footer.css';

const Footer = () => {
  const socialLinks = [
    {
      id: 1,
      icon: 'fab fa-instagram',
      link: 'https://instagram.com/yarifepower',
      label: 'Instagram'
    },
    {
      id: 2,
      icon: 'fab fa-linkedin',
      link: 'https://www.linkedin.com/in/yarifevallenilla/',
      label: 'LinkedIn'
    },
    {
      id: 3,
      icon: 'fab fa-youtube',
      link: 'https://www.youtube.com/@yarifepower',
      label: 'YouTube'
    },
    {
      id: 4,
      icon: 'fab fa-whatsapp',
      link: 'https://wa.me/584242429016',
      label: 'WhatsApp'
    },
    {
      id: 5,
      icon: 'fab fa-tiktok',
      link: 'https://www.tiktok.com/@yarifepower',
      label: 'TikTok'
    }
  ];

  return (
    <footer className="footer">
      <div className="flex-container">
        <div className='left-side'>
          <img src={logo} alt='Yarife' />
        </div>
        <div className='right-side'>
        <div className="social-links">
          {socialLinks.map((social) => (
            <a 
              key={social.id}
              href={social.link} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={social.label}
            >
              <i className={social.icon}></i>
            </a>
          ))}
        </div>
        <p>&copy; 2025 Yarife Vallenilla. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 