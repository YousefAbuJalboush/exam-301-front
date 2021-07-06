import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './components/Header'
import Home from './components/Home'
import FavoriteCocktail from './components/FavoriteCocktail'
export class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/favorite">
              <FavoriteCocktail />
            </Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
