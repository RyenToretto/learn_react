import React, { Component } from 'react';
import CommentAdd from '../components/CommentAdd/CommentAdd'
import CommentShow from '../components/CommentShow/CommentShow'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            comments: [{
                userName: "Tony",
                content: "So hard..."
            },{
                userName: "Jovi",
                content: "I can do it."
            },{
                userName: "Ryen",
                content: "I am good with this skill."
            }]
        };
        this.addComment = this.addComment.bind(this);
        this.deleteComment = this.deleteComment.bind(this);
    }
    
    addComment(nameInput, contentInput){
        let {comments} = this.state;
        comments.unshift({
            userName: nameInput,
            content: contentInput
        });
        this.setState({
            comments
        })
    }
    
    deleteComment(index){
        const {comments} = this.state;
        comments.splice(index, 1);
        this.setState({
            comments
        })
    }
    
    render() {
        const {comments} = this.state;
        return (
            <div className="app">
                <h1>请发表对 React 的评论</h1>
                <CommentAdd addComment={this.addComment}/>
                <CommentShow
                    comments={comments}
                    deleteComment={this.deleteComment}
                />
            </div>
        );
    }
}

export default App;
