import React, { Component } from 'react';
import ROW from '../components/ROW/ROW'
import axios from "axios";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            isFirst: true,
            responseData: []
        };
        this.userSearch = this.userSearch.bind(this);
    }
    
    async userSearch(){
        const searchName = this.refs.nameInput.value;
        const result = await axios.get(`https://api.github.com/search/users?q=${searchName}`);
        
        // [{},{}...] 数组 被 map 处理返回每一项，[{},{}...]
        let responseData = result.data.items.map((each, index)=>({
            usarName:each.login,
            picUrl:each.avatar_url,
            gitUrl:each.html_url
        }));
        
        this.setState({
            responseData,
            isFirst: false
        });
    }
    
    render() {
        const {responseData, isFirst} = this.state;
        let display = "none";
        if(!isFirst){
            display = responseData.length?"none":"block";
        }
        return (
            <div className="app">
                <section className="jumbotron">
                    <h3 className="jumbotron-heading">Git 用户搜索：</h3>
                    <div>
                        <input ref="nameInput" type="text" placeholder="请输入想要搜索的 '用户名'"/>
                        <button onClick={this.userSearch}>Search</button>
                    </div>
                </section>
                <h3 style={{display}}>未找到相关用户！</h3>
                {
                    responseData.map((each, index)=>{
                        return <ROW key={index} info={each}/>;
                    })
                }
            </div>
        );
    }
}

export default App;
