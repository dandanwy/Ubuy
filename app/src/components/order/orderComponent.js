import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import { Tabs, Icon } from 'antd';
import * as OrderActions from '../order/orderAction';
import './order.scss'
import {cookie } from '../../utils/cookie'
class OrderComponent extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            type:1
        }
    }
    componentDidMount() {
        var tel = cookie.get('userId')
        this.props.getData({type:this.state.type,tel:tel})
        console.log(this)
    }

    toAssess() {
        hashHistory.push('assess')
    }
    
    render() {
        return (
            <div id="order_zcy">
                <div className="order_top">
                    <div className="header">
                        <h3><Link to="/mypage"><Icon type="left" /></Link>我的订单</h3>
                    </div>
                </div>
                <div className="order_footer">
                    <Tabs defaultActiveKey="1" onChange={this.callback.bind(this)} className="menus_all">
                        <TabPane tab="全部" key="1" className="menuItem">
                            {
                                this.props.dataset.map(function(item,idx){
                                    return (
                                        <div className="order_all" key={idx}>
                                            <div className="left">
                                                <img src={item.imgurl} />
                                            </div>
                                            <div className="rigth">
                                                <p>{item.name}</p><br/>
                                                <span>￥{item.price}</span>
                                                <button>去支付</button>
                                                <em>订单号:{item.orderno}</em>
                                            </div>
                                        </div>
                                    )
                                }) 
                            }
                                
                        </TabPane>
                        <TabPane tab="待付款" key="2" className="menuItem">
                            {
                                this.props.dataset.map(function (item, idx) {
                                    return (
                                        <div className="order_all" key={idx}>
                                            <div className="left">
                                                <img src={item.imgurl} />
                                            </div>
                                            <div className="rigth">
                                                <p>{item.name}</p><br />
                                                <span>￥{item.price}</span>
                                                <button>去支付</button>
                                                <em>订单号:{item.orderno}</em>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </TabPane>
                        <TabPane tab="已付款" key="3" className="menuItem">
                            {
                                this.props.dataset.map(function (item, idx) {
                                    return (
                                        <div className="order_all" key={idx}>
                                            <div className="left">
                                                <img src={item.imgurl} />
                                            </div>
                                            <div className="rigth">
                                                <p>{item.name}</p><br />
                                                <span>￥{item.price}</span>
                                                <em>订单号:{item.orderno}</em>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </TabPane>
                        <TabPane tab="待评价" key="4" className="menuItem">
                            {
                                this.props.dataset.map(function (item, idx) {
                                    return (
                                        <div className="order_all" key={idx}>
                                            <div className="left">
                                                <img src={item.imgurl} />
                                            </div>
                                            <div className="rigth">
                                                <p>{item.name}</p><br />
                                                <span>￥{item.price}</span>
                                                <div onClick={this.toAssess.bind(this)}><button>去评价</button></div>
                                                <em>订单号:{item.orderno}</em>
                                            </div>
                                        </div>
                                    )
                                }.bind(this))
                            }
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        )
    }
    callback(key) {
        console.log(key);
        var tel = cookie.get("userId")
        this.props.getData({type:key,tel:tel})
    }
}
const TabPane = Tabs.TabPane;
function callback(key) {
    console.log(key);
}
const mapToState = function(state){
    console.log(state.order_list.respons)
    return {
        type: state.order_list.type,
        dataset: state.order_list.response || []
    }
}
export default connect(mapToState, OrderActions)(OrderComponent);