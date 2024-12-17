import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Aibutton from './Component/ExternalComp/Aibutton'

import { Auth0Provider } from '@auth0/auth0-react';

createRoot(document.getElementById('root')).render(
  <>
  <Auth0Provider
    domain="dev-td2ls27bh8z338be.us.auth0.com"
    clientId="HwmZct1HqBORFmVyQvdIdX3iaO7rNinB"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
        <Aibutton />  

  </>
)
