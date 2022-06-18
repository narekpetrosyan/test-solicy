import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { App } from './App';
import { CardsProvider } from './contex/CardsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CardsProvider>
    <App />
  </CardsProvider>,
);
