import React, { useState } from 'react';
import './Footer.css';
import footer_logo from '../Assets/logo_big.png';
import instagram_icon from '../Assets/instagram_icon.png';
import pintester_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';

const Footer = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState('');

  const togglePopup = (content) => {
    let newPopupContent = '';
    switch (content) {
      case 'Company':
        newPopupContent = 'Shopper is a leading online retailer specializing in clothing for all ages and styles.';
        break;
      case 'Products':
        newPopupContent = 'Explore our diverse range of clothing products including casual wear, formal wear, and accessories.';
        break;
      case 'Offices':
        newPopupContent = 'Visit our offices in major cities around the world for personalized shopping experiences.';
        break;
      case 'About':
        newPopupContent = 'Learn more about Shopper, our mission, and our commitment to providing quality products.';
        break;
      case 'Contact':
        newPopupContent = 'Get in touch with Shopper for any inquiries, customer support, or feedback.';
        break;
      default:
        newPopupContent = '';
    }
    setPopupContent(newPopupContent);
    setShowPopup(!showPopup);
  };

  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="Shopper Logo" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li onClick={() => togglePopup('Company')}>Company</li>
        <li onClick={() => togglePopup('Products')}>Products</li>
        <li onClick={() => togglePopup('Offices')}>Offices</li>
        <li onClick={() => togglePopup('About')}>About</li>
        <li onClick={() => togglePopup('Contact')}>Contact</li>
      </ul>

      {showPopup && (
        <div className="popup">
          <h2>{popupContent}</h2>
          <button onClick={() => setShowPopup(false)}>Close</button>
        </div>
      )}

      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <a href="https://www.instagram.com/your_instagram_account" target="_blank" rel="noopener noreferrer">
            <img src={instagram_icon} alt="Instagram" />
          </a>
        </div>
        <div className="footer-icons-container">
          <a href="https://www.pinterest.com/your_pinterest_account" target="_blank" rel="noopener noreferrer">
            <img src={pintester_icon} alt="Pinterest" />
          </a>
        </div>
        <div className="footer-icons-container">
          <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">
            <img src={whatsapp_icon} alt="WhatsApp" />
          </a>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Right Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
