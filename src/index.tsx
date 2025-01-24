import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';
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
// serviceWorkerRegistration.register({
//   onUpdate: (registration) => {
//     const { waiting } = registration || {};

//     if (waiting) {
//       // Mostrar un mensaje de actualización al usuario
//       const updateBanner = document.createElement('div');
//       updateBanner.innerHTML = `
//         <div style="position: fixed; bottom: 8px; padding: 0 16px; z-index: 1000;">
          //     <div style="
          //     background: rgb(28, 134, 72); 
          //     padding: 8px 16px; 
          //     border-radius: 16px; 
          //     text-align: center; 
          //     display: flex; 
          //     justify-content: space-around; 
          //     align-items: center; 
          //     color: #fff;
          //     z-index: 1000;">
          //   <span>Nueva Versión Disponible.</span>
          //   <button id="update-now" style="
          //       cursor: pointer; 
          //       background: transparent; 
          //       border: 1px solid #fff; 
          //       border-radius: 4px; 
          //       padding: 8px 16px; 
          //       margin-left: 16px; 
          //       text-transform: uppercase; 
          //       color: #fff;">
          //     Actualizar
          //   </button>
          // </div>
          // </div>
//       `;
//       document.body.appendChild(updateBanner);

//       document.getElementById('update-now')?.addEventListener('click', () => {
//         waiting.postMessage({ type: 'SKIP_WAITING' });

//         waiting.addEventListener('statechange', (event: any) => {
//           if (event.target.state === 'activated') {
//             window.location.reload();
//           }
//         });
//       });
//     }
//   },
// });


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
