import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Home from './containers/Home'
import Login  from './containers/Login'
import './App.css';

const App= () => (
  <Router>
    <div className="App">
      <Route exact path='/' render={() => <Home />} />
      <Route path='/login' render={() => <Login />} />
    </div>
  </Router>
);


export default App;
