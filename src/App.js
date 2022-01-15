import React from 'react';
import { Router, Route, Routes } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import Loading from './components/Loading';
import Home from './views/Home';
import Profile from './views/Profile';
import ExternalApi from './views/ExternalApi';
import history from './utils/history';
import initFontAwesome from './utils/initFontAwesome';
import Recipe from './views/Recipe';
import './App.css';
import FloatActionButton from './components/floatActionButton';

initFontAwesome();

const App = function App() {
  const { isLoading, error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router location={history.location} navigator={history}>
      <div id="app" style={{ backgroundColor: '#F1F8F6' }}>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/recipes" element={<Recipe />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/external-api" element={<ExternalApi />} />
        </Routes>
        <FloatActionButton />
      </div>
    </Router>
  );
};

export default App;
