import React from 'react';
import './App.css';
const pkVersion = require('../package.json');

function App() {

  return (
    <div id="app-desktop">
        Pwa Test Version {pkVersion.version}.
    </div>
  );
}

export default App;
