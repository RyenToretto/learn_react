import React, { Component } from 'react';

export default class ROW extends Component {
    constructor(props){
        super(props);
        this.addThisOne = this.addThisOne.bind(this)
    }
    
    addThisOne(){
    }
    
    render() {
        const {usarName, picUrl, gitUrl} = this.props.info;
        return (
            <div className="row">
                <a className="card" href={gitUrl} target="_blank">
                    <img src={picUrl} style={{width:"100px"}}/>
                    <p className="card-text">{usarName}</p>
                </a>
            </div>
        );
    }
}
