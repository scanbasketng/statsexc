import React from 'react';
import Stats from './components/stats';
import playersData from './equipea.json';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

function App() {
  return (
    <div>
      {/* ... Autres composants de votre application ... */}
      <Stats players={playersData} />
    </div>
  );
}

export default App;