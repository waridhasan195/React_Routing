import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Redirect} from "react-router-dom";


class Page2 extends Component {
    constructor(){
        super()
        this.state={
            data:"kabila from 2nd page"
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
            var data = "/Page3/"+this.state.data
            return (
                <div>
                    <h1>Page2</h1>
                    <button><Link to={data}>Data Pass</Link></button>
                    <br></br>
                    <button onClick={this.logout}>Logout</button>
                </div>
            )
        }

    }
}
export default Page2