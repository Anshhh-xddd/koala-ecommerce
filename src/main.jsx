import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct ReactDOM import
import { BrowserRouter } from 'react-router-dom'; // BrowserRouter for routing
import { Auth0Provider } from '@auth0/auth0-react'; // Auth0Provider for authentication
import { Provider } from 'react-redux';
import './index.css'; // Importing styles
import App from './App'; // Main App component
import store from './Redux/Store';
import Aibutton from './Component/ExternalComp/Aibutton'; // AI Button component

// Rendering the root React component
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain="dev-y7sbmek110i2z7gi.us.auth0.com"
        clientId="M4TAk7zj8AdukglRchPB8S4ksPrjcxR0"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        {/* Main Application */}
        <Provider store={store}>
          <App />
          {/* AI Button Component */}
        </Provider>
        <Aibutton />
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);
