import React, { Component } from 'react';
import axios from 'axios';
import './Profile.css';




export default class Profile extends Component {
    constructor() {
        super()
        this.state = {
                first_name: "",
                last_name:"",
                gender: "",
                hair_color: "",
                eye_color:"",
                user_image:"",
                hobby: "",
                birthday_day: "",
                birthday_month: "",
                birthday_year: ""
            }
        }
    
    submitUser() {
        let data = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            gender: this.state.gender,
            hair_color: this.state.hair_color,
            eye_color: this.state.eye_color,
            user_image:this.state.user_image,
            hobby: this.state.hobby,
            birthday_day: this.state.birthday_day,
            birthday_month: this.state.birthday_month,
            birthday_year: this.state.birthday_year
        }
        console.log('fired');
        axios.post('http://localhost:3000/api/submit_user', data).then(response => {
            console.log('user added', data)
        })
    }



    updateState(statekey, value) {
        switch(statekey) {            
            case 'first_name':
            this.setState ({
                first_name: value                
            })
            console.log(this.state.first_name)
            break;
            case 'last_name':
            this.setState ({
                last_name: value
            })
            console.log(this.state.last_name)
            break;
            case 'gender':
            this.setState ({
                gender: value
            })
            break;
            case 'hair_color':
            this.setState ({
                hair_color: value
            })
            break;
            case 'eye_color':
            this.setState ({
                eye_color: value
            })
            break;
            case 'hobby':
            this.setState ({
                hobby: value
            })
            break;
            case 'birthday_day':
            this.setState ({
                birthday_day: value
            })
            break;
            case 'birthday_month':
            this.setState ({
                birthday_month: value
            })
            console.log(this.state);
            
            break;
            case 'birthday_year':
            this.setState ({
                birthday_year: value
            })
            break;
            default:
            return this.state;
            
        }
}


    render() {
        return (
            <div>
                <div className="Profile Display">
                    <img src={"user_image"} alt="profile"/>
                    <button className="update-button" onClick={() => this.submitUser(this.data)}>Update</button>
                    <button className="cancel-button" onClick={() => this.cancelUser(this.state)}>Cancel</button>
                </div>
            <div className="profile-change-display">
                <div className="profile-change-left">
                    <div className="firstname">
                        <span className="first-name-title">First Name</span>
                        <input className="input-first-name" onChange={
                        (e) => this.updateState('first_name', e.target.value)} />
                    </div>
                    <div className="lastname">
                        <span className="last-name-title">Last Name</span>
                        <input className="input-last-name"  onChange={
                            (e) => this.updateState('last_name', e.target.value)} />
                    </div>
                    <div className="gender">
                        <span className="gender-title">Gender</span>
                        <select className="input-gender" onChange={
                            (e) => this.updateState('gender', e.target.value)}>
                        <option selected="Select" disabled value="">- -Select- -</option>
                        <option value="Male"> Male </option>
                        <option value="Female"> Female </option>
                        <option value="Other"> Other </option>
                        </select>
                    </div>
                    <div className="hair-color">
                        <span className="hair-color-title">Hair Color</span>
                        <select className="input-haircolor" onChange={
                            (e) => this.updateState('hair_color', e.target.value)}>
                        <option selected="Select" disabled value="">- -Select- -</option>
                        <option value="Brown"> Brown </option>
                        <option value="Red"> Red </option>
                        <option value="Blonde"> Blonde </option>
                        <option value="Black"> Black </option>
                        <option value="Grey/White"> Grey/White </option>
                        </select>
                    </div>
                    <div className="eye-color">
                        <span className="eye-color-title">Eye Color</span>
                        <select className="input-eyecolor" onChange={
                            (e) => this.updateState('eye_color', e.target.value)}>
                        <option selected="Select" disabled value="">- -Select- -</option>
                        <option value="Brown"> Brown </option>
                        <option value="Red"> Red </option>
                        <option value="Hazel"> Hazel </option>
                        <option value="Black"> Black </option>
                        <option value="Blue"> Blue </option>
                        <option value="Green"> Green </option>
                        <option value="Grey/White"> Grey/White </option>
                        </select>
                    </div>
                    <div className="profile-change-right">
                        <div className="hobby">
                            <span className="hobby-title">Hobby</span>
                            <select className="input-hobby" onChange={
                                (e) => this.updateState('hobby', e.target.value)}>
                            <option selected="Select" disabled value="">- -Select- -</option>
                            <option value="Video Games"> Video Games </option>
                            <option value="Hiking"> Hiking </option>
                            <option value="Sports"> Sports </option>
                            <option value="Fishing"> Fishing </option>
                            <option value="Snowboarding"> Snowboarding </option>
                            </select>
                        </div>
                        <div className="birthday">
                            <span className="birthday-title">Birth Day</span>
                            <select className="input-birthday" onChange={
                                (e) => this.updateState('birthday_day', e.target.value)}>
                            <option selected="Select" disabled value="">- -Select- -</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>
                            </select>
                        </div>
                        <div className="birthmonth">
                            <span className="birthmonth-title">Birth Month</span>
                            <select className="input-birthmonth" onChange={
                                (e) => this.updateState('birthday_month', e.target.value)}>
                            <option selected="Select" disabled value="">- -Select- -</option>
                            <option value="January">January</option>
                            <option value="February">February</option>
                            <option value="March">March</option>
                            <option value="April">April</option>
                            <option value="May">May</option>
                            <option value="June">June</option>
                            <option value="July">July</option>
                            <option value="August">August</option>
                            <option value="September">September</option>
                            <option value="October">October</option>
                            <option value="November">November</option>
                            <option value="December">December</option>
                            </select>
                        </div>
                        <div className="birthyear">
                            <span className="birthyear-title">Birth Year</span>
                            <select className="input-birthday" onChange={
                                (e) => this.updateState('birthday_year', e.target.value)}>
                            <option selected="Select" disabled value="">- -Select- -</option>
                            <option value="1980">1980</option>
                            <option value="1981">1981</option>
                            <option value="1982">1982</option>
                            <option value="1983">1983</option>
                            <option value="1984">1984</option>
                            <option value="1985">1985</option>
                            <option value="1986">1986</option>
                            <option value="1987">1987</option>
                            <option value="1988">1988</option>
                            <option value="1989">1989</option>
                            <option value="1990">1990</option>
                            <option value="1991">1991</option>
                            <option value="1992">1992</option>
                            <option value="1993">1993</option>
                            <option value="1994">1994</option>
                            <option value="1995">1995</option>
                            <option value="1996">1996</option>
                            <option value="1997">1997</option>
                            <option value="1998">1998</option>
                            <option value="1999">1999</option>
                            <option value="2000">2000</option>
                            <option value="2001">2001</option>
                            <option value="2002">2002</option>
                            <option value="2003">2003</option>
                            <option value="2004">2004</option>
                            <option value="2005">2005</option>
                            <option value="2006">2006</option>
                            <option value="2007">2007</option>
                            </select>
                        </div>
                    </div>


                </div>
            </div>
            </div>
        )
    }
}