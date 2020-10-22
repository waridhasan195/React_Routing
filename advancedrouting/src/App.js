import React from 'react';
import logo from './logo.svg';
import './App.css';
import Myroute from './components/Myroute';
import Mynavigation from './components/Mynavigation';
import { BrowserRouter } from "react-router-dom"


function App() {
  return (
    <div>
      <BrowserRouter>
        <Mynavigation></Mynavigation>
        <Myroute></Myroute>
      </BrowserRouter>

    </div>
  );
}

export default App;
