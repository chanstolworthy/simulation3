import React, { Component } from 'react';
import './Login.css';
import wink from '../../wink1600.png'
import logo from './logo.png';
import {Link} from 'react-router-dom';



export default class Login extends Component {
    render() {
        return (
            <div className="App">
                
                    <div className="logo">
                        <div></div>
                    <img className="img shadowtime dabox" src={wink} alt='logo' />
                    
                    
                    <div className="button">

                    <a href={process.env.REACT_APP_LOGIN}><button className="hvr-pulse-grow login-button">Login</button></a>

                    </div>
                   
                </div>
            </div>
        )
    }
}