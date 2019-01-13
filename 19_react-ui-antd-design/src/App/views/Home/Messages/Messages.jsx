import React, { Component } from 'react';

import {Link, Route} from "react-router-dom";

import MessageDetail from "./MessageDetail/MessageDetail";

import {Button, message} from "antd";    /* 1. 引入 */
/* import "antd/dist/antd.min.css"    // 会导入整个 css, 显然不是我们想要的*/

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
                        messages.map((m)=>{
                            return (
                                <li key={m.id}>
                                    <Link to={`/home/messages/`+m.id}>
                                        {m.title}
                                    </Link>
                                    <div>
                                        <button onClick={()=>this.pushLink(m.id)}>Push 查看</button>
                                        <button onClick={()=>this.replaceLink(m.id)}>Replace 查看</button>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
                
                {/* 2. 使用 - 标签使用 */}
                <Button type="primary" onClick={()=>message.info("antd 按钮 message.info")}>
                    Hello antd-design !
                </Button>&nbsp;&nbsp;&nbsp;&nbsp;
                
                <button onClick={()=>this.props.history.goBack()}>
                    回退 👈
                </button>&nbsp;&nbsp;&nbsp;&nbsp;
                
                <Button type="primary" onClick={()=>this.props.history.goForward()}>
                    前进 👉
                </Button><hr/>
                
                <Route path="/home/messages/:id" component={MessageDetail}/>
            </div>
        );
    }
}
