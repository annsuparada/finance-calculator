import React from 'react';
import CompoundPage from './components/compoundInterest/CompoundPage';
import NavBar from './components/navBar/NavBar';

import './styles/global.scss';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="main-container">
       
        <CompoundPage />
      </div>
    </div>
  );
}

export default App;
