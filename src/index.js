import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider as StyletronProvider, DebugEngine } from 'styletron-react';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Auth0Provider } from '@auth0/auth0-react';
import { StyleReset } from 'atomize';
import { Provider } from 'react-redux';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

import App from './App';
import history from './utils/history';
import getConfig from './config';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';

const onRedirectCallback = function onRedirectCallback(appState) {
  history.push(
    appState && appState.returnTo
      ? appState.returnTo
      : window.location.pathname,
  );
};

// Please see https://auth0.github.io/auth0-react/interfaces/auth0_provider.auth0provideroptions.html
// for a full list of the available properties on the provider
const config = getConfig();

const debug = process.env.NODE_ENV === 'production' ? 0 : new DebugEngine();

// 1. Create a client engine instance
const engine = new Styletron();

const providerConfig = {
  domain: config.domain,
  clientId: config.clientId,
  ...(config.audience ? { audience: config.audience } : null),
  redirectUri: `${window.location.origin}/recipes`,
  onRedirectCallback,
};

const theme = createTheme({
  palette: {
    primary: { main: '#42927C' },
  },
  typography: {
    fontFamily: 'Poppins',
  },
});

ReactDOM.render(
  <Auth0Provider
    domain={providerConfig.domain}
    clientId={providerConfig.clientId}
    audience={providerConfig.audience}
    redirectUri={providerConfig.redirectUri}
    onRedirectCallback={providerConfig.onRedirectCallback}
    cacheLocation="localstorage"
  >
    <Provider store={store}>
      <StyletronProvider value={engine} debug={debug} debugAfterHydration>
        <StyleReset />
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </StyletronProvider>
    </Provider>
  </Auth0Provider>,
  document.getElementById('root'),
);

serviceWorkerRegistration.register();
reportWebVitals();
