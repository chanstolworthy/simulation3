import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';

import Recommendedfriends from './components/ReccomendedFriends';


export default (
    <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/dashboard' component={Recommendedfriends} />
        <Route path ='/profile' component={Profile} />    
    </Switch>
)