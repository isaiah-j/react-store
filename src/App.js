import React from 'react';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import { Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Route exact path='/' render={() => <HomePage></HomePage>}></Route>
      <Route path='/shop' render={() => <ShopPage></ShopPage>}></Route>
    </div>
  );
}

export default App;
