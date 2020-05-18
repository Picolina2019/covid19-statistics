import React from 'react';
import { Container } from '@material-ui/core';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Summary } from './components/Summary';
import { Detailed } from './components/Detailed';

function App() {
  return (
    <Container maxWidth='md'>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Summary />
          </Route>
          <Route path='/detailed'>
            <Detailed />
          </Route>
          <Route path='*'>
            <Redirect to='/' />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
