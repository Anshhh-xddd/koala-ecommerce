import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct ReactDOM import
import { BrowserRouter } from 'react-router-dom'; // BrowserRouter for routing
import { Auth0Provider } from '@auth0/auth0-react'; // Auth0Provider for authentication
import './index.css'; // Importing styles
import App from './App'; // Main App component
import Aibutton from './Component/ExternalComp/Aibutton'; // AI Button component

// Rendering the root React component
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain="dev-td2ls27bh8z338be.us.auth0.com"
        clientId="HwmZct1HqBORFmVyQvdIdX3iaO7rNinB"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        {/* Main Application */}
        <App />
        {/* AI Button Component */}
        <Aibutton />
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);
