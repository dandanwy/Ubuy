import React from 'react';
import {connect} from 'react-redux';
import {Router, Route, Link, hashHistory} from 'react-router';
import './Service.scss'
import { Layout, Menu, Breadcrumb, Icon, Carousel} from 'antd';

export default class Server extends React.Component{
    render(){
        return(
            <div id="server_cts">
                <div className="header">
                    <h3><Link to="/server"><Icon type="left" /></Link>Ubuy</h3>
                </div>
                <div className="footer_cts">
                    <div className="msg"></div>
                   
                </div>
                <div className="Input">
                    <input type="text" placeholder="请输入你的问题"/>
                    <button>发送</button>
                </div>
            </div>
        )
    }
}

