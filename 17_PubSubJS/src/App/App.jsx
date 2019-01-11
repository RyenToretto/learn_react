import React, { Component } from 'react';

import ROW from '../components/ROW/ROW'
import axios from "axios";
import PubSub from "pubsub-js";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            isFirst: true,
            fond: false,
            errInfo:"",
            responseData: []
        };
        this.userSearch = this.userSearch.bind(this);
    }
    
    componentDidMount(){
        PubSub.subscribe("keywords", async (msgName, searchName)=>{
            this.setState({
                isFirst: false,
                fond: false,
                errInfo:"",
                responseData: []
            });
            try{
                const result = await axios.get(`https://api.github.com/search/users?q=${searchName}`);
    
                // [{},{}...] 数组 被 map 处理返回每一项，[{},{}...]
                let responseData = result.data.items.map((each, index)=>({
                    usarName:each.login,
                    picUrl:each.avatar_url,
                    gitUrl:each.html_url
                }));
    
                this.setState({
                    responseData,
                    fond: true
                });
            }catch (e) {
                this.setState({
                    errInfo:"请求出错，请稍后重试...",
                    fond: true
                });
            }
        })
    }
    
    async userSearch(){
        const searchName = this.refs.nameInput.value;
        if(searchName){
            PubSub.publish("keywords", searchName);
            this.refs.nameInput.value = ""
        }
    }
    
    render() {
        const {responseData, isFirst, fond, errInfo} = this.state;
        let tips = "";
        if(isFirst){
            tips = '请输入想要所搜的"用户名"';
        }else if(!fond){
            if(errInfo){
                tips = errInfo;
            }else{
                tips = "Searching...";
            }
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
                <h3>{tips}</h3>
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
