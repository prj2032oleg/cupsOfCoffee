import React from 'react';
import { useTranslation } from 'react-i18next';

/**
 * TripsPage component
 * Displays user's saved and planned trips
 */
const TripsPage: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('trips.title', 'Meine Reisen')}</h1>
      <p>{t('trips.description', 'Hier finden Sie alle Ihre geplanten und vergangenen Reisen.')}</p>
      <button>{t('trips.create', 'Neue Reise planen')}</button>
    </div>
  );
};

export default TripsPage;
