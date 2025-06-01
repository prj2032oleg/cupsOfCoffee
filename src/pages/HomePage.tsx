import React from 'react';
import { useTranslation } from 'react-i18next';

/**
 * HomePage component
 * Main landing page of the application
 */
const HomePage: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('app.title', 'Cafe Reisen')}</h1>
      <p>{t('home.welcome', 'Willkommen bei Ihrer Reiseplanungs-App!')}</p>
      <p>{t('home.description', 'Planen Sie Ihre Reisen und entdecken Sie die besten Cafés auf der ganzen Welt.')}</p>
      <button>{t('home.getStarted', 'Jetzt starten')}</button>
    </div>
  );
};

export default HomePage;