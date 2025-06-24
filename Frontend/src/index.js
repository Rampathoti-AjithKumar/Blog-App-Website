import React from 'react';
//import ReactDOM from 'react-dom';
import App from './App';
import AuthContextProvider from './Context/AuthContext'
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
       <App />
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
