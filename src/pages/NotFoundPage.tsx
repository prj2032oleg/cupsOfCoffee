import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

/**
 * NotFoundPage component
 * Displayed when a route doesn't match any valid routes
 */
const NotFoundPage: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>{t('notFound.title', 'Seite nicht gefunden')}</h2>
      <p>{t('notFound.message', 'Die von Ihnen gesuchte Seite existiert nicht.')}</p>
      <Link to="/">
        <button>{t('notFound.backHome', 'Zurück zur Startseite')}</button>
      </Link>
    </div>
  );
};

export default NotFoundPage;