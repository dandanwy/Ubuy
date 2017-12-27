import React from 'react';
import ReactDOM from 'react-dom'
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router'
import { cookie } from '../../utils/cookie'
import { message } from 'antd'
export default class notLogin extends React.Component{
    componentDidMount() {
        if (!cookie.get('userId')) {
            message.loading(
                '您尚未登录', 2
            )
        }
    }
    login() {
        hashHistory.push('login')
    }
    render(){
        return(
            <div className="header_cts">
                <p className="notLogin" onClick={this.login.bind(this)}><span>登录</span>/<span>注册</span></p>
            </div>
        )
    }
}
