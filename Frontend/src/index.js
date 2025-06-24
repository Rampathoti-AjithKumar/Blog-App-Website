import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AuthContextProvider from './Context/AuthContext'

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
       <App />
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

function (l) {
      if (l.search[1] === "/") {
        var decoded = l.search
          .slice(1)
          .split("&")
          .map(function (s) {
            return s.replace(/~and~/g, "&");
          })
          .join("?");
        window.history.replaceState(
          null,
          null,
          l.pathname.slice(0, -1) + decoded + l.hash
        );
      }
    })(window.location);
