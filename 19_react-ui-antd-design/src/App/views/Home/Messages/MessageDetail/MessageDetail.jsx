import React, { Component } from 'react';

export default class MessageDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            messages: []
        }
    }
    
    componentDidMount(){
        window.setTimeout(()=>{
            this.setState({
                messages:[
                    {id:1, title:"Time is running!", content: "时间紧迫啊！"},
                    {id:3, title:"You gota working harder!", content: "更努力才行！"},
                    {id:5, title:"Life is hard.", content: "生活不易！"}
                ]
            });
        }, 400);
    }
    
    render() {
        const {messages} = this.state;
        const index = +this.props.match.params.id;
        const message = messages.find(message=>message.id===index);
        if(!message){
            return "";    // 再取到数据前，避免读 属性 报错
        }
        return (
            <ul className="message_detail">
                <li>{message.id}</li>
                <li>{message.title}</li>
                <li>{message.content}</li>
            </ul>
        );
    }
}
