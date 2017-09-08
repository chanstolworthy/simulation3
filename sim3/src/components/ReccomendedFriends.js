import React, { Component } from 'react';
import axios from 'axios'


class RecommendedFriends extends Component {
    constructor() {
        super();
        this.state = {
            reccomendedFriends: [],
        }
        console.log(this.state)
    }
    componentDidMount() {
        axios.get('http://localhost:3000/api/reccomended_friends').then(response => {

            this.setState({
                reccomendedFriends: response.data,
            })
            console.log(this.state.reccomendedFriends)
        })
    }

    render() {

        return (
            <div className='RecommendedFriends'>

                <h2> Reccomended Friends </h2>
                <div>
                    {this.state.reccomendedFriends.map((friends, i) => {
                        return (
                            <div key={i}> {friends.first_name} {friends.last_name}</div>
                        )
                    })}
                    }
                </div>
            </div>
        )
    }
}
export default RecommendedFriends