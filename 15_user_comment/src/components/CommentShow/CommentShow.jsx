import React, { Component } from 'react';
import NameAndWords from '../NameAndWords/NameAndWords';
import "./CommentShow.css";

export default class CommentShow extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }
    
    render() {
        const {comments, deleteComment} = this.props;
        const display = comments.length?"none":"block";
        
        return (
            <div className="comment_show">
                <h2 style={{display}}>暂无评论，请在左边添加！！！</h2>
                {
                    comments.map((each, index)=>{
                         return <NameAndWords
                             key={index}
                             name={each.userName}
                             words={each.content}
                             arrId={index}
                             deleteComment={deleteComment}
                         />
                    })
                }
            </div>
        );
    }
}
