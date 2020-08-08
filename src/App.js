import React from 'react';
// components
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/Header/header.component'
import SignInPage from './pages/sign-in-page/sign-in-page.component'
import SignUpPage from './pages/sign-up-page/sign-up.page'

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

        <Route path="/signin">
          <SignInPage></SignInPage>
        </Route>
        <Route path="/signup">
          <SignUpPage></SignUpPage>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
