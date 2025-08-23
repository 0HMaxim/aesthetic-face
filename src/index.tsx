// index.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import './i18n';

import {ThemeProvider} from './context/ThemeProvider.tsx';

document.title = import.meta.env.VITE_APP_NAME || "My App";

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <ThemeProvider>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </React.StrictMode>
);