import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Footer.css';

/**
 * Footer component
 * Contains copyright information, links, and social media
 */
const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>{t('common.appName')}</h3>
          <p className="footer-description">
            A multilingual travel planning application focused on discovering great coffee spots around the world.
          </p>
        </div>

        <div className="footer-section">
          <h3>Links</h3>
          <ul className="footer-links">
            <li><Link to="/">{t('header.home')}</Link></li>
            <li><Link to="/trips">{t('header.trips')}</Link></li>
            <li><Link to="/explore">{t('header.explore')}</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Legal</h3>
          <ul className="footer-links">
            <li><Link to="/terms">{t('footer.terms')}</Link></li>
            <li><Link to="/privacy">{t('footer.privacy')}</Link></li>
            <li><Link to="/contact">{t('footer.contact')}</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Languages</h3>
          <div className="footer-languages">
            <button onClick={() => i18n.changeLanguage('en')}>English</button>
            <button onClick={() => i18n.changeLanguage('de')}>Deutsch</button>
            <button onClick={() => i18n.changeLanguage('ru')}>Русский</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>{t('footer.copyright').replace('2023', currentYear.toString())}</p>
      </div>
    </footer>
  );
};

export default Footer;
