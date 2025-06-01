import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import './i18n'; // Importiere i18n zum Initialisieren
import HomePage from './pages/HomePage';
import TripsPage from './pages/TripsPage';
import DiscoverPage from './pages/DiscoverPage';
import NotFoundPage from './pages/NotFoundPage';

// Router-Konfiguration
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {
          path: 'trips',
          element: <TripsPage />
        },
        {
          path: 'discover',
          element: <DiscoverPage />
        },
        {
          path: '*',
          element: <NotFoundPage />
        }
      ]
    }
  ],
  {
    basename: import.meta.env.BASE_URL || '/',
    future: {
      v7_normalizeFormMethod: true
    }
  }
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);