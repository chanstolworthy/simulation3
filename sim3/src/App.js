import React, { Component } from 'react';
import './App.css';
import Login from './components/Login/Login';
import './components/Login/Login.css';
import Profile from './components/Profile/Profile';
import {Route} from 'react-router-dom';
import router from './router';

class App extends Component {
  render() {
    return (
      <div className="App">
        {router}
      </div>
    );
  }
}

export default App;
