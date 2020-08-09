import React, { useState, useEffect } from 'react';
// components
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/Header/header.component'
import SignInPage from './pages/sign-in-page/sign-in-page.component'
import SignUpPage from './pages/sign-up-page/sign-up.page'

import { auth } from './firebase/firebase.utils'

import { createUserProfileDocument } from './firebase/firebase.utils'

import { Route, Link, Switch } from 'react-router-dom'
import './App.css'

function App() {
  const [currentUser, setCurrentUser] = useState()

  useEffect(() => {
    auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      }
      else{
        setCurrentUser(null)
      }

    })

    // Unsubscribe from session when component unmounts
    return auth.onAuthStateChanged(user => {
      setCurrentUser(user)
    })
  }, [])

  return (
    <div className="App">
      <Header currentUser={currentUser}></Header>
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
