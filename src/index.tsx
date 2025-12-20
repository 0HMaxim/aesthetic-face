// index.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import './i18n';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {ThemeProvider} from './context/ThemeProvider.tsx';

document.title = import.meta.env.VITE_APP_NAME || "My App";

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <ThemeProvider>
        <HashRouter>
          <App />
        </HashRouter>
      </ThemeProvider>
    </React.StrictMode>
);