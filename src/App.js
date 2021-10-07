import React from 'react';
import { Router } from 'react-router-dom';

import history from './services/history';
import GlobalStyle from './styles/GlobalStyles';
import Header from './components/Header';
import Routes from './routes';

function App() {
  return (
    // Envolve as rotas dentro de BrowserRoutes e controla os links
    <Router history={history}>
      <Header />
      <Routes />
      <GlobalStyle />
    </Router>
  );
}

export default App;
