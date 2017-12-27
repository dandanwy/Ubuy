import React from 'react';
import {connect} from 'react-redux';
import {Router, Route, Link, hashHistory} from 'react-router';
import './Service.scss'
import { Layout, Menu, Breadcrumb, Icon, Carousel} from 'antd';

export default class Server extends React.Component{
    state={
        menusItem:['如何修改收货地址？',"收到商品不喜欢，如何退货"]
    }
    render(){
        return(
            <div id="server_cts">
                <div className="header">
                    <h3><Link to="/mypage"><Icon type="left" /></Link>联系客服</h3>
                   
                </div>
                <div className="footer_cts">
                    <h4><Icon type="phone" />客服热线：400-163-8888</h4>
                   
                    <div className="SE">
                        <ul>
                            <li><Link to="/chat"><span>在线客服</span><Icon type="right" /></Link></li>
                            <li><Link to="/feedfack"><span>留言反馈</span><Icon type="right" /></Link></li>
                        </ul>
                    </div>
                    <div className="Official_Accounts">
                        <h4>微信服务号</h4>
                        <h5><Icon type="wechat" /><span>如有更多问题可关注微信服务号</span></h5> 
                    </div>
                </div>
            </div>
        )
    }
}

// <div className="guess">
// <h4>猜你想问</h4>
// <ul>
//     <li><span>退货金额不是原价格</span><Icon type="right" /></li>
//     <li><span>退货金额如何计算</span><Icon type="right" /></li>
//     <li><span>账户问题</span><Icon type="right" /></li>
//     <li><span>退货金额不是原价格</span><Icon type="right" /></li>
//     <li><span>退货金额如何计算</span><Icon type="right" /></li>
//     <li><span>账户问题</span><Icon type="right" /></li>
//      <li><span>退货金额不是原价格</span><Icon type="right" /></li>
//     <li><span>退货金额如何计算</span><Icon type="right" /></li>
//     <li><span>账户问题</span><Icon type="right" /></li>
//     <li><span>退货金额不是原价格</span><Icon type="right" /></li>
//     <li><span>退货金额如何计算</span><Icon type="right" /></li>
//     <li><span>账户问题</span><Icon type="right" /></li>
// </ul>
// </div>