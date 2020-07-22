import React from 'react';
import CompoundPage from './components/compoundInterest/CompoundPage';
import NavBar from './components/navBar/NavBar';
import SideBar from './components/sideBar/SideBar';

import './styles/global.scss';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="main-container">
        <SideBar />
        <CompoundPage />
      </div>
    </div>
  );
}

export default App;
