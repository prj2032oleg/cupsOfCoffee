import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from '../Button/Button';
import './Header.css';

/**
 * Header component
 * Main navigation and authentication buttons
 */
const Header: React.FC<{}> = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">{t('common.appName')}</Link>
        </div>
        
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <span className="menu-icon"></span>
        </button>
        
        <nav className={`main-nav ${isMenuOpen ? 'is-open' : ''}`}>
          <ul className="nav-links">
            <li><Link to="/">{t('header.home')}</Link></li>
            <li><Link to="/trips">{t('header.trips')}</Link></li>
            <li><Link to="/explore">{t('header.explore')}</Link></li>
          </ul>
          
          <div className="language-selector">
            <button onClick={() => changeLanguage('en')}>EN</button>
            <button onClick={() => changeLanguage('de')}>DE</button>
            <button onClick={() => changeLanguage('ru')}>RU</button>
          </div>
          
          <div className="auth-buttons">
            <Link to="/login">
              <Button label={t('header.login')} variant="secondary" />
            </Link>
            <Link to="/register">
              <Button label={t('header.register')} variant="primary" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;