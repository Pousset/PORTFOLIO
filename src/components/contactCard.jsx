import React, { useState, useContext, createContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../styles/Home.css'; // Assurez-vous d'avoir les styles nécessaires pour le mode sombre
import "../styles/contactCard.css";
// Contexte pour le mode sombre
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

const Parameter = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      {/* icone réglage */}
      <FontAwesomeIcon icon={faBars} />

      {/* li pour chaque réglage */}
      <ul>
        <li>Acceuil</li>
        <li>
          <a href="https://github.com">Github</a>
        </li>
        <li>
          <a href="https://linkedin.com">Linkedin</a>
        </li>
      </ul>
    </div>
  );
};

export { ThemeProvider, Parameter };

const ContactCard = () => {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <div className={`card ${active ? 'active' : ''}`}>
      <div className={`photo ${active ? 'active' : ''}`}></div>
      <div className={`banner ${active ? 'active' : ''}`}></div>
      <ul>
        <li><b>John Doe</b></li>
        <li>Web Developer</li>
      </ul>
      <button className="contact" id="main-button" onClick={toggleActive}>
        {active ? 'back' : 'click to get in touch'}
      </button>
      <div className={`social-media-banner ${active ? 'active' : ''}`}>
        <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
        <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
      </div>
      <form className={`email-form ${active ? 'active' : ''}`}>
        <input id="name" type="text" placeholder="name" />
        <input id="email" type="text" placeholder="email" />
        <textarea id="comment" type="text" placeholder="comment"></textarea>
        <button className="contact">send</button>
      </form>
    </div>
  );
};

export default ContactCard;