import React from 'react';
import { Icon,Tabs} from 'antd';
import {connect} from 'react-redux'
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import './manager_order.scss'
import {cookie} from "../../utils/cookie"
import * as manageOrderAction from "../manager/managerOrderAction"
const TabPane = Tabs.TabPane;
class managerOrder extends React.Component{
    state={
        type:2
    }
    componentDidMount(){
        var tel = cookie.get("userId")
        // console.log(tel)
        this.props.getData({type:this.state.type,tel:tel})
    }
    render(){
        return(
            <div id="helpCenter_cts">
                <div className="header">
                    <h3><Link to="/mypage"><Icon type="left" /></Link>我的订单</h3>
                </div>
                <div className="collect_footer">
                <Tabs defaultActiveKey="2" onChange={this.callback.bind(this)} className="menus_all">
                    <TabPane tab="进行中" key="2" className="menuItem">
                    {  
                            this.props.dataset.map(function(obj,idx){
                                // console.log(obj)
                            return (
                                <div className="manegeorder" key={idx}>
                                    <div className="left"><img  src={obj.imgurl}/></div>
                                    <div className="rigth">
                                        <p>{obj.name}</p>
                                        <span className="cost">￥{obj.Oprice}</span>
                                        <span>￥{obj.price}</span>
                                    </div>
                                </div>
                            )
                        })
                        
                    }
                    </TabPane>
                    <TabPane tab="已完成" key="3" className="menuItem">
                    {
                         this.props.dataset.map(function(obj,idx){
                            //  console.log(obj)
                            return (
                                <div className="manegeorder" key={idx}>
                                    <div className="left"><img  src={obj.imgurl}/></div>
                                    <div className="rigth">
                                        <p>{obj.name}</p>
                                        <span className="cost">￥{obj.Oprice}</span>
                                        <span>￥{obj.price}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </TabPane>
                </Tabs>
            </div>
            </div>
        )
    }
    callback(key) {
        // console.log(key);
        var tel = cookie.get("userId")
        this.props.getData({type:key,tel:tel})
    }
}


const mapToState = function(state){ 
    // console.log('state',state.managerOrderRequested.response)  
    return {
        dataset : state.managerOrderRequested.response || []
    }
}

export default connect(mapToState, manageOrderAction)(managerOrder);

