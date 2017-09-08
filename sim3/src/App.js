import React, { Component } from 'react';
import './App.css';
import Login from './components/Login/Login';
import './components/Login/Login.css';
import Profile from './components/Profile/Profile';
import {Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Route exact path='/' component={Login} />
       <Route path='/profile' component={Profile} />
      </div>
    );
  }
}

export default App;
