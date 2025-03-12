import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="dev-i3wl8agttv16q6iq.us.auth0.com"
    clientId="ZKfYZyJwlc0A8bwB1hX4iSwgIQH6Ng10"
    authorizationParams={{
      redirect_uri: window.location.origin,
       audience: "https://dev-i3wl8agttv16q6iq.us.auth0.com/api/v2/",
      scope: "read:current_user update:current_user_metadata"
    }}
  >
    <App />
  </Auth0Provider>,
);