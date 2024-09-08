import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/Index.css';
import ContactCard from './components/contactCard';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <ContactCard />
  </React.StrictMode>,
);