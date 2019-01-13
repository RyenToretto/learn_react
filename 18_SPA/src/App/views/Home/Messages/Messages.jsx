import React, { Component } from 'react';

import {Link, Route} from "react-router-dom";

import MessageDetail from "./MessageDetail/MessageDetail";

import "./css/Messages.css";

export default class Messages extends Component {
    constructor(props){
        super(props);
        this.state = {
            messages:[]
        };
        this.pushLink = this.pushLink.bind(this)
        this.replaceLink = this.replaceLink.bind(this)
    }
    
    pushLink(messageId){
        this.props.history.push("/home/messages/"+messageId);
    }
    
    replaceLink(messageId){
        this.props.history.replace("/home/messages/"+messageId);
    }
    
    componentDidMount(){
        window.setTimeout(()=>{
            this.setState({
                messages:[
                    {id:1, title:"Time is running!"},
                    {id:3, title:"You should working hard !"},
                    {id:5, title:"Because the life is hard !"}
                ]
            });
        }, 400);
    }
    
    render() {
        const {messages} = this.state;
        return (
            <div className="messages clearfix">
                <ul>
                    {
                        messages.map((message)=>{
                            return (
                                <li key={message.id}>
                                    <Link to={`/home/messages/`+message.id}>
                                        {message.title}
                                    </Link>
                                    <div>
                                        <button onClick={()=>this.pushLink(message.id)}>Push 查看</button>
                                        <button onClick={()=>this.replaceLink(message.id)}>Replace 查看</button>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
                <button onClick={()=>this.props.history.goBack()}>回退 👈</button>&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={()=>this.props.history.goForward()}>前进 👉</button><hr/>
                <Route path="/home/messages/:id" component={MessageDetail}/>
            </div>
        );
    }
}
