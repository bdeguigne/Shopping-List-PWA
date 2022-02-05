import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes as Router,
  useLocation,
} from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { CircularProgress } from '@mui/material';
import { Div } from 'atomize';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import Home from './views/Home';
import Profile from './views/Profile';
import ExternalApi from './views/ExternalApi';
import initFontAwesome from './utils/initFontAwesome';
import Recipe from './views/Recipe';
import './App.css';
import RecipeDetails from './views/RecipeDetails';
import { createOrLogUser } from './redux/thunks/userThunk';

initFontAwesome();

const App = function App() {
  const dispatch = useDispatch();
  const { isLoading, error, isAuthenticated, user } = useAuth0();

  React.useEffect(() => {
    if (isAuthenticated && user && dispatch) {
      dispatch(createOrLogUser(user.email, user.given_name));
    }
  }, [isAuthenticated, user, dispatch]);

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return (
      <Div d="flex" justify="center" align="center" h="100%">
        <CircularProgress />;
      </Div>
    );
  }

  return (
    <BrowserRouter>
      <Div id="app" bg="#F1F8F6" h="100%">
        <RoutesBuilder
          routes={[
            { path: '/', element: <Home /> },
            { path: '/recipes', element: <Recipe /> },
            { path: '/recipes/:recipeId', element: <RecipeDetails /> },
            { path: '/profile', element: <Profile /> },
            { path: '/external-api', element: <ExternalApi /> },
          ]}
        />
      </Div>
    </BrowserRouter>
  );
};

export const RoutesBuilder = (props) => {
  const { routes } = props;

  const location = useLocation();
  return (
    <Router location={location}>
      {routes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Router>
  );
};

RoutesBuilder.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  routes: PropTypes.array.isRequired,
};

export default App;
