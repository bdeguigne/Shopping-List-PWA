import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import history from './utils/history';
import getConfig from './config';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

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

const providerConfig = {
  domain: config.domain,
  clientId: config.clientId,
  ...(config.audience ? { audience: config.audience } : null),
  redirectUri: 'http://localhost:5000',
  onRedirectCallback,
};

ReactDOM.render(
  <Auth0Provider
    domain={providerConfig.domain}
    clientId={providerConfig.clientId}
    audience={providerConfig.audience}
    redirectUri={providerConfig.redirectUri}
    onRedirectCallback={providerConfig.onRedirectCallback}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root'),
);

serviceWorkerRegistration.register();
reportWebVitals();
