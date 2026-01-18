import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter} from 'react-router-dom';
import App from './App';
import './index.css';
import './i18n';
import { ThemeProvider } from './context/ThemeProvider';

// Создаем компонент-прослойку прямо зд


const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

createRoot(rootElement).render(
    <React.StrictMode>
        <ThemeProvider>
            <HashRouter>
                <App />
            </HashRouter>
        </ThemeProvider>
    </React.StrictMode>
);