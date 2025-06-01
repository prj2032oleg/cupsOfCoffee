import React from 'react';
import { useTranslation } from 'react-i18next';

/**
 * DiscoverPage component
 * Allows users to discover new travel destinations and cafes
 */
const DiscoverPage: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('discover.title', 'Entdecken')}</h1>
      <p>{t('discover.description', 'Entdecken Sie die besten Cafés und Reiseziele.')}</p>
      <div className="categories">
        <div className="category">
          <h2>{t('discover.cafes', 'Cafés')}</h2>
        </div>
        <div className="category">
          <h2>{t('discover.destinations', 'Reiseziele')}</h2>
        </div>
        <div className="category">
          <h2>{t('discover.experiences', 'Erlebnisse')}</h2>
        </div>
      </div>
    </div>
  );
};

export default DiscoverPage;
