import React from 'react';
import { Layout, Menu, Breadcrumb, Icon, Carousel} from 'antd';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router'
import {cookie} from '../../utils/cookie'
import {message} from 'antd'
export default class alreadyLogged extends React.Component{
    componentWillUpdate(nextProps,nextState) {
        // console.log()
        // cookie.get(name)
    }

    componentWillMount() {
        //  拿cookie
        console.log(cookie.get('userId'))
    }
  
    exit() {
        cookie.remove('userId')
        hashHistory.push('login')
    }
    render(){
        return(
            <div className="header_cts">
                <div className="alreadyLogged">
                    <div className="TX"></div>
                    <div className="usermsg">

                        <h3>用户{cookie.get('userId')}</h3>
                        <span className="le" onClick={this.exit.bind(this)}>退出用户</span>
                        <span>账户管理<Icon type="right" /></span>
                    </div>
                </div>
            </div>
        )
    }
}
