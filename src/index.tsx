import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register({
  onUpdate: (registration) => {
    const { waiting } = registration || {};

    if (waiting) {
      try {
        // Solicitar al SW que tome control inmediatamente
        waiting.postMessage({ type: 'SKIP_WAITING' });

        // Escuchar cambios de estado
        waiting.addEventListener('statechange', (event: any) => {
          if (event.target.state === 'activated') {
            console.log('New version activated. Reloading...');
            window.location.reload();
          }
        });
      } catch (error) {
        console.error('Error updating Service Worker:', error);
      }
    } else {
      console.log('No waiting Service Worker found.');
    }
  },
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
