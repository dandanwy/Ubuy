import React from 'react';
import { Icon } from 'antd';
import { cookie } from '../../utils/cookie'
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';

import './footer.scss'
export default class footerComponent extends React.Component {
    toIndex() {
        hashHistory.push('/')
    }
    toList() {
        hashHistory.push('classify')
    }
    toCart() {
        hashHistory.push('car')
    }
    toMy() {
        hashHistory.push('mypage')
    }
    render() {
        return (
            <div className="footer_zcy">
                <ul>
                    <li onClick={this.toIndex.bind(this)}>
                        <Icon type="home"></Icon>
                        <p>首页</p>
                    </li>
                    <li onClick={this.toList.bind(this)}>
                        <Icon type="appstore-o"></Icon>
                        <p>分类</p>
                    </li>
                    <li onClick={this.toCart.bind(this)}>
                        <Icon type="shopping-cart"></Icon>
                        <p>购物车</p>
                    </li>
                    <li onClick={this.toMy.bind(this)}>    
                        <Icon type="user"></Icon>
                        <p>我的</p>
                    </li>                    
                </ul>
            </div>
        )
    }
}