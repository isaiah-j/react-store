import React from 'react';
// components
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/Header/header.component'

import { Route, Link, Switch } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Switch>
        <Route exact path='/'>
          <HomePage></HomePage>
        </Route>

        <Route path='/shop'>
          <ShopPage></ShopPage>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
