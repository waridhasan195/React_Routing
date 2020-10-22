import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Home extends Component {
    render() {
        if(sessionStorage.getItem("userName")==null){
            return <Redirect to="/Login"></Redirect>
        }
        else{
            return (
                <div>
                    <h1>This is Home</h1>
                </div>
            )
        }

    }
}
export default Home