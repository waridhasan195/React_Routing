import React, { Component } from 'react'
import {Route, Switch} from "react-router-dom";
import Page1 from "./pages/Page1.js"
import Page2 from "./pages/Page2.js"
import Page3 from "./pages/Page3.js"
import Home from "./pages/Home.js"
import Notfound from './pages/Notfound';
import Login from './pages/Login.js';


class Myroute extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/Login" component={Login}></Route>
                    <Route exact path="/Page1" component={Page1}></Route>
                    <Route exact path="/Page2" component={Page2}></Route>
                    <Route exact path="/Page3/:username/" component={Page3}></Route>
                    <Route component={Notfound}></Route>
                </Switch>
            </div>
        )
    }
}
export default Myroute
