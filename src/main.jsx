import React from 'react';
import ReactDOM from 'react-dom/client';
import { Details } from './pages/Details';


// Importando o themeProvider da libe style-com..
// Importando o theme da pasta styles/theme.js 
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme'

// Importar os styles globals 
import GlobalStyles from './styles/global';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Details />
    </ThemeProvider>
  </React.StrictMode>,
)
