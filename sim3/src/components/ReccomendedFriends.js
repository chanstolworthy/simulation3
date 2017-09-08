import React, { Component } from 'react';
import axios from 'axios';
import './Profile/Profile.css';
import profile from './Profile/binary.jpg';
import {Link} from 'react-router-dom';
import './rec.css'

class RecommendedFriends extends Component {
    constructor() {
        super();
        this.state = {
            reccomendedFriends: [],
        }
        console.log(this.state)
    }
    componentDidMount() {
        axios.get('http://localhost:3001/api/reccomended_friends').then(response => {

            this.setState({
                reccomendedFriends: response.data,
            })
            console.log(this.state.reccomendedFriends)
        })
    }

    render() {

        return (
            <div className='RecommendedFriends'>
                <div className="profile-display">
                    <img src={profile} alt="profile" />
                    <div className="buttons">
                    <Link to="/profile"><button className="cancel-button"> Edit Profile </button></Link>
                        <p>Welcome to Helo! Find recommended friends based on your similarities, and even search for them by name. The more you update your profile, the better recommendations we can make!</p>
                </div>
                </div>
                <div className="friends-display-box">        
                <h2> Recommended Friends </h2>
                <div>
                    {this.state.reccomendedFriends.map((friends, i) => {
                        return (
                            
                            <div key={i} className='border'> {friends.first_name} {friends.last_name} <button>add friend</button></div>
                            
                        )
                    })}
                    }
                </div>
                </div>
            </div>
        )
    }
}
export default RecommendedFriends