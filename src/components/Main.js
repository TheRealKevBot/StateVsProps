import React, { Component } from 'react'

import UserInfo from './UserInfo'

export default class Main extends Component {

    state = {
        user: {
            username: 'RealKevBot',
            f_name: 'Kevin',
            l_name: 'Glasgow',
            email: 'Kglas001@gmail.com',
            password: '123' 
        }
    }

    userStateChange = () => {
        this.setState({ user: {
            username: 'MoneyBaggs',
            f_name: 'Bilbo',
            l_name: 'Baggins',
            email: 'MoneyBaggs@shiremail.com',
            password: '321' 
        } })
    }

    render() {
        return (
            <div className='main'>
                <h1>Welcome Back {this.state.user.username}!</h1>
                <h2>It sure has been a while since we last saw you, {this.state.user.f_name}.</h2>
                <button type='button' onClick={this.userStateChange}>Change the state of user</button> 
                <UserInfo user={this.state.user}/>
            </div>
        )
    }
}
