import React, { Component } from 'react';

import {Route, Redirect} from "react-router-dom";

import MyNavLink from "./component/MyNavLink";

import Home from "./views/Home/Home";
import About from "./views/About/About";

import "./css/App.css";

class App extends Component {
    render() {
        return (
            <div className="app">
                <h1>react-router-dom</h1><hr />
                <div>
                    <div className="left_nav">
                        <MyNavLink to="/home">Home</MyNavLink>
                        <MyNavLink to="/about">About</MyNavLink>
                    </div>
                    <div className="right_content">
                        <Route path="/home" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Redirect to="/home"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
