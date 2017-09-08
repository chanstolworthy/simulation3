import React, { Component } from 'react';
import './Login.css';
import logo from './logo.png';
import {Link} from 'react-router-dom';



export default class Login extends Component {
    render() {
        return (
            <div className="App">
                <div className="logo-container">
                    <div className="logo">
                    <img src={logo} alt='logo' />
                    </div>
                    <div className="button">
                    {/* <a href={process.env.REACT_APP_LOGIN}><button className="login-button">Login</button></a> */}
                    <Link to="/dashboard"><button className="login-button">Login</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}