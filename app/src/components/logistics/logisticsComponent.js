import React from 'react';
import { Icon} from 'antd';
import {connect} from 'react-redux'
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import * as logisticsAction from './logisticsAction'

class LogisticsComponent extends React.Component{
     
    render(){
        return(
            <div id="helpCenter_cts">
                <div className="header">
                    <h3><Link to="/mypage"><Icon type="left" /></Link>查看物流</h3>
                </div>
                <div className="footer_cts">
                    暂无物流信息
                </div>
            </div>
        )
    }
}
const mapToState = function(state){ 
    console.log(state)  
    return {
        // Type: state.helpReducer || []
    }
}

export default connect(mapToState, logisticsAction)(LogisticsComponent);

