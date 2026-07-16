import { createRoot, hydrateRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import ThemeContextProvider from './contexts/ThemeContext';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { HelmetProvider } from 'react-helmet-async';

const muiTheme = createTheme();

const app = (
  <HelmetProvider>
    <ThemeContextProvider>
      <ThemeProvider theme={muiTheme}>
        <App />
      </ThemeProvider>
    </ThemeContextProvider>
  </HelmetProvider>
);

const rootElement = document.getElementById('root');
const normalizePath = (path) => path.length > 1 ? path.replace(/\/$/, '') : path;
const prerenderedPath = rootElement.dataset.prerenderedPath;
const canHydrate = rootElement.hasChildNodes()
  && normalizePath(prerenderedPath || '') === normalizePath(window.location.pathname);

if (canHydrate) {
  hydrateRoot(rootElement, app);
} else {
  rootElement.replaceChildren();
  createRoot(rootElement).render(app);
}
