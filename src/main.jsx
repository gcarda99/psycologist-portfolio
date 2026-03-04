import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import ThemeContextProvider from './contexts/ThemeContext';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const muiTheme = createTheme();

const root = createRoot(document.getElementById('root'));
root.render(
  <ThemeContextProvider>
    <ThemeProvider theme={muiTheme}>
      <App />
    </ThemeProvider>
  </ThemeContextProvider>
);
