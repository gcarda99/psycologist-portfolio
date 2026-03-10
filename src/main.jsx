import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import ThemeContextProvider from './contexts/ThemeContext';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { HelmetProvider } from 'react-helmet-async';

const muiTheme = createTheme();

const root = createRoot(document.getElementById('root'));
root.render(
  <HelmetProvider>
    <ThemeContextProvider>
      <ThemeProvider theme={muiTheme}>
        <App />
      </ThemeProvider>
    </ThemeContextProvider>
  </HelmetProvider>
);
