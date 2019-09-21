import React from 'react';

import Routes from './routes.js'
import './App.css';

import './styles.css';

import Header from './components/header/Index.js';


const App = () => (
  
    <div className="App">
      <Header />
      <Routes />
    </div>
  );


export default App;
