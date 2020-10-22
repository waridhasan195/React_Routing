import React, { Component } from 'react'

export default class Login extends Component {
    login=()=>{
        sessionStorage.setItem("userName","kabila")
    }
    logout=()=>{
        sessionStorage.clear()
    }

    render() {
        return (
            <div>
                <button onClick={this.login}>Login</button>
                <br></br>
                <button onClick={this.logout}>Logout</button>

            </div>
        )
    }
}
