import React from 'react';
import {connect} from 'react-redux';
import {Tabs, Icon} from 'antd';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';

import './viewhistory.scss'

export default class ViewHistoryComponent extends React.Component{
    componentDidMount(){
        var cookies = document.cookie;
        // document.cookie = 'name=laoxie';
        // this.props.normalSearch();
        // console.log(cookies['id'])
        // this.setState({list:})
    }
    state={
        list:''
    }
    render(){
        return(
            <div id="viewhistory_cts">
                <div className="viewhistory_top">
                    <div className="header">
                        <h3><Link to="/mypage"><Icon type="left" /></Link>浏览记录</h3>
                        <span>清空</span>
                    </div>
                </div>
                <div className="viewhistory_footer">
                    <div className="viewhistory_all">
                        <div className="left"><img  src="http://localhost:3032/src/libs/default/img1.jpg"/></div>
                        <div className="rigth">
                            <p>jsaidajjdsisadas</p>
                            <span className="cost">￥1490</span>
                            <span>￥448</span>
                            <Icon type="right" />
                        </div>
                    </div>

                    
                </div>
            </div>
        )
    }
}

                   
{/* <div className="viewhistory_all">
    <div className="left"><img  src="http://localhost:3032/src/libs/default/img1.jpg"/></div>
    <div className="rigth">
        <p>jsaidajjdsisadas</p>
        <span className="cost">￥1490</span>
        <span>￥448</span>
        <Icon type="right" />
    </div>
</div> */}
                  