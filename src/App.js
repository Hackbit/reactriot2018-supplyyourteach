import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { Paper, Grid } from '@material-ui/core';
import Home from './containers/Home';
import Login  from './containers/Login';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Parents from './containers/Parents';

import './App.css';

const styles = theme => ({
  root: {
    overflow: 'hidden',
    padding: `0 ${theme.spacing.unit * 3}px`,
  },
  wrapper: {
    maxWidth: 400,
  },
  paper: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit * 2,
  },
});

const App= () => (
  <Router>
    <div className="App">
      <Header />
        <Route exact path='/' render={() => <Home />} />
        <Route path='/login' render={() => <Login />} />
        <Route path='/parents' render={() => <Parents />} />
      <Footer />
    </div>
  </Router>
);


export default App;
