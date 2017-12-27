import React from 'react';
import { Icon} from 'antd';
// import {createStore} from 'redux';
import {connect} from 'react-redux'
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import './helpCenter.scss'
import * as helpAction from './helpAction'

class HelpCenter extends React.Component{
    state={
        menusItem:['优购会员注册协议','优购会员PLUS用户协议','购物流程','售后服务','常见问题','优惠券使用说明','礼品卡使用说明','积分说明','十天补差价','防诈骗须知'],
        hlepType:this.props.Type.type
    }
    render(){
        return(
            <div id="helpCenter_cts">
                <div className="header">
                    <h3><Link to="/mypage"><Icon type="left" /></Link>帮助中心</h3>
                </div>
                <div className="footer_cts">
                    <ul>
                        {
                            this.state.menusItem.map(function(val,idx){
                                // console.log(val)
                                return ( <li key={idx} id={'help'+idx} onClick={(e) => {this.helpHendle(e)}}><span id={'help'+idx}>{val}</span><Icon type="right" /></li>)
                            }.bind(this))
                        }
                    </ul>
                </div>
            </div>
        )
    }
    helpHendle(event){
        // console.log(this.props.Type.type)
        this.props.help(event)
        hashHistory.push(`/helpitem`)
        // hashHistory.push(`/helpitem/${this.props.hlepType}`)
        // console.log(this.state.hlepType);
    }
}
const mapToState = function(state){ 
    // console.log(state.helpReducer)  
    return {
        Type: state.helpReducer || []
    }
}

export default connect(mapToState, helpAction)(HelpCenter);

