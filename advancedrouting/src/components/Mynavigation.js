import React, { Component } from 'react'
import {Link, NavLink} from "react-router-dom"
// import NavLink from "react-router-dom/modules/NavLink";

class Mynavigation extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><NavLink exact activeStyle={{color:"green"}} to="/">Home</NavLink></li>
                    <li><NavLink exact activeStyle={{color:"green"}} to="/Page1">Page1</NavLink></li>
                    <li><NavLink exact activeStyle={{color:"green"}} to="/Page2">Page2</NavLink></li>
                    <li><NavLink exact activeStyle={{color:"green"}} to="/Page3">Page3</NavLink></li>
                </ul>
            </div>
        )
    }
}
export default Mynavigation



