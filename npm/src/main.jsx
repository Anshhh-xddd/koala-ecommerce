import { createRoot } from 'react-dom/client'; // Correct ReactDOM import
import { BrowserRouter } from 'react-router-dom'; // Added missing BrowserRouter import
import './index.css'; // Importing styles
import App from './App'; // Main App component
import Aibutton from './Component/ExternalComp/Aibutton'; // AI Button component
import { Auth0Provider } from '@auth0/auth0-react'; // Auth0Provider for authentication




// Rendering the root React component
const rootElement = document.getElementById('root');

createRoot(rootElement).render(
  <BrowserRouter>
  <Auth0Provider
    domain="dev-td2ls27bh8z338be.us.auth0.com"
    clientId="HwmZct1HqBORFmVyQvdIdX3iaO7rNinB"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
    >
      <App />
    {/* Include the AI Button component outside Auth0Provider */}
  <Aibutton />
  </Auth0Provider>
    </BrowserRouter>
);
