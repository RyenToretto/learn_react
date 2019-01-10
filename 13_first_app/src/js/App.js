import React, { Component } from 'react';
import reactLogo from '../svg/logo.svg';
import '../css/base.css';
import '../css/index.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
        this.countNumber = this.countNumber.bind(this);
    }
    countNumber(){
        let {count} = this.state;
        count += 1;
        this.setState({
            count
        });
    }
    render() {
        const {count} = this.state;
        const {countNumber} = this;
        return (
            <div className="App">
                <img src={reactLogo} className="react_logo" alt="react_logo"/>
                Hello My React App.<br/>
                <button onClick={countNumber}>计数 #{count}</button>
            </div>
        );
    }
}

export default App;
