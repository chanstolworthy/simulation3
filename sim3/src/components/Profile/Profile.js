import React, { Component } from 'react'



this.state = {
    id: "",
    first: "",
    last: "",
    birthday: "",
    eyeColor: "",
    hairColor: "",
    gender: "",
    hobby: "",
    birthMonth: "",
    birthDay: "",
    birthYear: "",
    showRequired: false
};

export default class Profile extends Component {
    render() {
        return (
            <div className="profile-change-display">
                <div className="profile-change-left">
                    <div className="firstname">
                        <span className="first-name-title">First Name</span>
                        <input className="input-first-name"
                            value={this.state.first} onChange={
                                (e) => this.updateState('first', e.target.value)} />
                    </div>
                    <div className="lastname">
                        <span className="last-name-title">Last Name</span>
                        <input className="input-last-name" value={this.state.last} onChange={
                            (e) => this.updateState('last', e.target.value)} />
                    </div>
                    <div className="gender">
                        <span className="gender-title">Gender</span>
                        <select className="input-gender" value={this.state.gender} onChange={
                            (e) => this.updateState('gender', e.target.value)} />
                        <option disabled value="">- -Select- -</option>
                        <option value="Male"> Male </option>
                        <option value="Female"> Female </option>
                        <option value="Other"> Other </option>
                    </div>
                    <div className="hair-color">
                        <span className="hair-color-title">Hair Color</span>
                        <select className="input-haircolor" value={this.state.hairColor} onChange={
                            (e) => this.updateState('hairColor', e.target.value)} />
                        <option disabled value="">- -Select- -</option>
                        <option value="Brown"> Brown </option>
                        <option value="Red"> Red </option>
                        <option value="Blonde"> Blonde </option>
                        <option value="Black"> Black </option>
                        <option value="Grey/White"> Grey/White </option>
                    </div>
                    <div className="eye-color">
                        <span className="eye-color-title">Eye Color</span>
                        <select className="input-eyecolor" value={this.state.eyeColor} onChange={
                            (e) => this.updateState('eyeColor', e.target.value)} />
                        <option disabled value="">- -Select- -</option>
                        <option value="Brown"> Brown </option>
                        <option value="Red"> Red </option>
                        <option value="Hazel"> Hazel </option>
                        <option value="Black"> Black </option>
                        <option value="Blue"> Blue </option>
                        <option value="Green"> Green </option>
                        <option value="Grey/White"> Grey/White </option>
                    </div>
                    <div className="profile-change-right">
                        <div className="hobby">
                            <span className="hobby-title">Hobby</span>
                            <select className="input-hobby" value={this.state.hobby} onChange={
                                (e) => this.updateState('hobby', e.target.value)} />
                            <option disabled value="">- -Select- -</option>
                            <option value="Video Games"> Video Games </option>
                            <option value="Hiking"> Hiking </option>
                            <option value="Sports"> Sports </option>
                            <option value="Fishing"> Fishing </option>
                            <option value="Snowboarding"> Snowboarding </option>
                        </div>
                        <div className="birthday">
                            <span className="birthday-title">Birth Day</span>
                            <select className="input-birthday" value={this.state.birthDay} onChange={
                                (e) => this.updateState('birthDay', e.target.value)} />
                            <option disabled value="">- -Select- -</option>
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
                        </div>
                        <div className="birthmonth">
                            <span className="birthmonth-title">Birth Month</span>
                            <select className="input-birthmonth" value={this.state.birthMonth} onChange={
                                (e) => this.updateState('birthMonth', e.target.value)} />
                            <option disabled value="">- -Select- -</option>
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
                        </div>
                    </div>


                </div>
            </div>
        )
    }
}