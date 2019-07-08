import React, { Component } from 'react';
import Login from '../components/Login';
import './css/home.css';
import marcaBiud from '../img/0-log-in-marca-2@2x.png'

export default class Home extends Component {
    state = {
    }

    render() {
        return (
            <div className="bg">
                    <div className="caption">
                        <img src={marcaBiud} alt="logo" className="imgLogo"></img>

                        <Login />
                    </div>
            </div>
        )
    }
}