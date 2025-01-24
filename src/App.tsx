import React from 'react';
import { useSelector } from "react-redux";
import Alert from '@mui/material/Alert';
import './App.css';
import { IState } from './store';
const pkVersion = require('../package.json');

function App() {
  const isServiceWorkerUpdated = useSelector(
    (state: IState) => state.serviceWorkerUpdated,
);
  const serviceWorkerRegistration = useSelector(
      (state: IState) => state.serviceWorkerRegistration,
  );

  const updateServiceWorker = () => {
    const registrationWaiting = serviceWorkerRegistration.waiting;
    if (registrationWaiting) {
        registrationWaiting.postMessage({ type: 'SKIP_WAITING' });
    
        registrationWaiting.addEventListener('statechange', (e:any) => {
            if (e.target.state === 'activated') {
            window.location.reload();
            }
        });
    }
  };

  return (
    <div id="app-desktop">
      {isServiceWorkerUpdated && (
        <Alert severity="success">
        Nueva version disponible.
        <button onClick={updateServiceWorker}>Actualizar</button>
        </Alert>
        )}
        Pwa Test Version {pkVersion.version}.
    </div>
  );
}

export default App;
