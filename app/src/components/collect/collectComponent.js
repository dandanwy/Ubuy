import React from 'react';
import {connect} from 'react-redux';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import { Tabs, Icon} from 'antd';

import * as CollectAction from './CollectAction'
import {cookie} from "../../utils/cookie"

import './collect.scss'

class CollectComponent extends React.Component{
    componentDidMount() {
        this.props.getData()
    }
    render(){
        return(
            <div id="collect_cts">
                <div className="collect_top">
                    <div className="header">
                        <h3><Link to="/mypage"><Icon type="left" /></Link>我的收藏</h3>
                    </div>
                </div>
                <div className="collect_footer">
                    <Tabs defaultActiveKey="1" onChange={callback} className="menus_all">
                        <TabPane tab="全部" key="1" className="menuItem">
                           
                            {
                                this.props.dataset.map(function(obj,idx){
                                   
                                    return (
                                        <div className="collect_all" key={idx}>
                                            <div className="left"><img  src={obj.imgurl}/></div>
                                            <div className="rigth">
                                                <p>{obj.name}</p>
                                                <span className="cost">￥{obj.Oprice}</span>
                                                <span>￥{obj.price}</span>
                                                <button>加入购物车</button>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </TabPane>
                        <TabPane tab="降价" key="2" className="menuItem">
                            暂无降价商品
                        </TabPane>
                        <TabPane tab="即将断货" key="3" className="menuItem">
                            暂无断货商品
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        )
    }
    componentDidMount(){
        var tel = cookie.get("userId")
        this.props.getData(tel) 
    }
    

    getKeys(item){
        var newObj = (item ? Object.keys(item) : []);
        return newObj
    }
}
const TabPane = Tabs.TabPane;
function callback(key) {
    console.log(key);
}

const mapToState = function(state){
    console.log(state.collect.response)
    return {
        dataset: state.collect.response || []
    }
}
export default connect(mapToState, CollectAction)(CollectComponent)
