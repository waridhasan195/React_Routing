import React, { Component } from 'react'
import {Redirect} from "react-router-dom";


class Page3 extends Component {
    constructor({match}){
        super()
        this.state={
            namee:match.params.username
        }
    }
    logout=()=>{
        sessionStorage.clear()
    }
    render() {

        if(sessionStorage.getItem("userName")==null){
            return <Redirect to="/Login"></Redirect>
        }
        else{
            return (
                <div>
                    <p>{this.state.namee}</p>
                    <br></br>
                    <button onClick={this.logout}>Logout</button>
                </div>
            )
        }

    }
}
export default Page3