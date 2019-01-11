import React, { Component } from 'react';

import "./NameAndWords.css";

export default class NameAndWords extends Component {
    constructor(props){
        super(props);
        this.deleteThisOne = this.deleteThisOne.bind(this);
    }
    
    deleteThisOne(){
        const {arrId, deleteComment} = this.props;
        deleteComment(arrId);
    }
    
    render() {
        const {name, words} = this.props;
        return (
            <div className="name_and_words">
                {name}<br/>
                <div className="flex_box">
                    <span>{words}</span>
                    <button onClick={this.deleteThisOne}>删除</button>
                </div>
            </div>
        );
    }
}
