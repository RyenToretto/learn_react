import React, { Component } from 'react';
import "./CommentAdd.css"

export default class CommentAdd extends Component {
    constructor(props){
        super(props);
        this.addThisOne = this.addThisOne.bind(this)
    }
    
    addThisOne(){
        const {addComment} = this.props;
        
        addComment(
            this.refs.nameInput.value,
            this.refs.contentInput.value
        );
        
        this.refs.nameInput.value = "";
        this.refs.contentInput.value = "";
    }
    
    render() {
        return (
            <div className="comment_add">
                <label>用户名：
                    <input type="text" ref="nameInput"/>
                </label><br />
                评论 : <br/>
                <textarea className="text_area" ref="contentInput" defaultValue="I wanna say something......">{}</textarea>
                <button onClick={this.addThisOne}>提交评论</button>
            </div>
        );
    }
}
