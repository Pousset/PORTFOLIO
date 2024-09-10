import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './styles/Index.css';
import ContactCard from './components/contactCard.jsx';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <GoogleOAuthProvider clientId="704617051875-amhllq6mh5pjrt41nvitc6bvra2nt58n.apps.googleusercontent.com">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GoogleOAuthProvider>,
  rootElement
);