import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import { Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Route exact path='/' render={() => <HomePage></HomePage>}></Route>
    </div>
  );
}

export default App;
