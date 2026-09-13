import React from 'react';
import type { RouteRecord } from 'vite-react-ssg';
import App from './App';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Cases from './pages/Cases';
import CaseDetail from './pages/CaseDetail';
import About from './pages/About';
import ContactPage from './pages/ContactPage';
import NoCureNoPay from './pages/NoCureNoPay';
import Kennisbank from './pages/Kennisbank';
import BlogPost from './pages/BlogPost';
import Landing from './pages/Landing';

export const routes: RouteRecord[] = [
  // Landingspagina voor campagnes: zonder header/footer
  {
    path: '/start',
    Component: Landing,
  },
  // Alle reguliere pagina's onder de standaard layout
  {
    path: '/',
    element: <App />,
    entry: 'App.tsx',
    children: [
      { index: true, Component: Home },
      { path: 'diensten', Component: Services },
      {
        path: 'diensten/:service',
        Component: ServiceDetail,
        getStaticPaths: () => [
          'diensten/leadgeneratie',
          'diensten/sourcing',
          'diensten/automation-ai',
        ],
      },
      { path: 'cases', Component: Cases },
      {
        path: 'cases/:id',
        Component: CaseDetail,
        getStaticPaths: () => [
          'cases/leadgeneratie-techniek',
          'cases/sourcing-finance',
          'cases/full-service-sales',
        ],
      },
      { path: 'no-cure-no-pay-leadgeneratie', Component: NoCureNoPay },
      { path: 'kennisbank', Component: Kennisbank },
      {
        path: 'kennisbank/:slug',
        Component: BlogPost,
        getStaticPaths: () => ['kennisbank/meer-opdrachtgevers-als-recruitment-agency', 'kennisbank/wat-kost-leadgeneratie-recruitmentbureau', 'kennisbank/koude-acquisitie-recruiters-werkt-steeds-minder'],
      },
      { path: 'over-ons', Component: About },
      { path: 'werken-bij', Component: About },
      { path: 'contact', Component: ContactPage },
    ],
  },
];
