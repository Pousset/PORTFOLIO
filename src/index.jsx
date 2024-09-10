import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <GoogleOAuthProvider clientId="704617051875-amhllq6mh5pjrt41nvitc6bvra2nt58n.apps.googleusercontent.com">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GoogleOAuthProvider>,
  rootElement
);