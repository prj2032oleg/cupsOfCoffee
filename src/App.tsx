import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Hauptkomponente
function App() {
  const { t, i18n } = useTranslation();
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="app-container">
      <header>
        <div className="logo">
          <Link to="/">{t('app.title', '52 Cups of Coffee')}</Link>
        </div>
        <nav>
          <ul>
            <li><Link to="/">{t('nav.home', 'Home')}</Link></li>
            <li><Link to="/trips">{t('nav.trips', 'Trips')}</Link></li>
            <li><Link to="/discover">{t('nav.discover', 'Discover')}</Link></li>
          </ul>
        </nav>
        <div className="language-switcher">
          <button onClick={() => changeLanguage('en')}>EN</button>
          <button onClick={() => changeLanguage('de')}>DE</button>
          <button onClick={() => changeLanguage('ru')}>RU</button>
        </div>
        <div className="auth-buttons">
          <button>{t('nav.login', 'Log In')}</button>
          <button>{t('nav.signup', 'Sign Up')}</button>
        </div>
      </header>

      <main>
        <React.Suspense fallback="Loading...">
          <Outlet />
        </React.Suspense>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} 52 Cups of Coffee</p>
      </footer>
    </div>
  );
}

export default App;