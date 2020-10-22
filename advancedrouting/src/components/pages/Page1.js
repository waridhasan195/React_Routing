import React, { Component } from 'react'
import {Redirect} from "react-router-dom";

class Page1 extends Component {
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
                    <h1>Page 1</h1>
                    <br></br>
                    <button onClick={this.logout}>Logout</button>
                </div>
            )
        }
    }
}
export default Page1