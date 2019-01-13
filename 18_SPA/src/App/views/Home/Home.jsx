import React, { Component } from 'react';

import {Switch, Route, Redirect} from "react-router-dom";

import News from "./News/News";
import Messages from "./Messages/Messages";

import MyNavLink from "../../component/MyNavLink";
import "./css/Home.css";

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <h3 className="content_title">
                    <MyNavLink to="/home/news">News</MyNavLink>
                    <MyNavLink to="/home/messages">Messages</MyNavLink>
                </h3>
                <hr/>
                <Switch>
                    <Route path="/home/news" component={News}/>
                    <Route path="/home/messages" component={Messages}/>
                    <Redirect to="/home/news"/>
                </Switch>
            </div>
        );
    }
}
