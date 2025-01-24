import React, { useEffect, useState } from 'react';
import './App.css';
import { Snackbar, Alert } from '@mui/material';
import { register } from './serviceWorkerRegistration';
const pkVersion = require('../package.json');

function App() {

  const [updateAvailable, setUpdateAvailable] = useState(false);

  useEffect(() => {
    // Registrar el Service Worker y manejar el evento onUpdate
    register({
      onUpdate: (registration: any) => {
        const { waiting } = registration || {};

        if (waiting) {
          setUpdateAvailable(true); // Mostrar la alerta cuando hay una nueva versión

          // Opción de forzar el "skipWaiting" cuando el usuario lo permita
          waiting.postMessage({ type: 'SKIP_WAITING' });

          waiting.addEventListener('statechange', (event: any) => {
            if (event.target.state === 'activated') {
              window.location.reload(); // Recargar la página después de la activación
            }
          });
        }
      },
    });
  }, []);

  const handleClose = () => {
    setUpdateAvailable(false); // Cerrar la alerta
  };

  return (
    <div id="app-desktop">
        <h2>Pwa Test Version {pkVersion.version}.</h2>
        <h3>Update to new version</h3>
        <Snackbar
        open={updateAvailable}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        autoHideDuration={null} // Mantener visible hasta que el usuario tome acción
      >
        <Alert
          onClose={handleClose}
          severity="info"
          sx={{ width: '100%' }}
          action={
            <button
              onClick={() => window.location.reload()}
              style={{
                backgroundColor: '#1976d2',
                color: 'white',
                padding: '6px 12px',
                borderRadius: '4px',
                border: 'none',
                cursor: 'pointer',
                marginLeft: '16px',
              }}
            >
              Actualizar
            </button>
          }
        >
          Nueva version Disponible!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default App;
