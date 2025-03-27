import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css'

createRoot(document.getElementById('root')).render(
<Auth0Provider
    domain="dev-i3wl8agttv16q6iq.us.auth0.com"
    clientId="B3CKqmTGNDSbHtn82sUkCCV3ohVKG7vi"
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: "https://dev-i3wl8agttv16q6iq.us.auth0.com/api/v2/",
      scope: "read:current_user update:current_user_metadata"
    }}
  >
    <App />
  </Auth0Provider>
  
 
)

