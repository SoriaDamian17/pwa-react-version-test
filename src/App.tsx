import React from 'react';
import './App.css';
const pkVersion = require('../package.json');

function App() {

  return (
    <div id="app-desktop">
        <h2>Pwa Test Version {pkVersion.version}.</h2>
        <h3>Update to new version</h3>
    </div>
  );
}

export default App;
