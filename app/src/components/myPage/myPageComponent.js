import React from 'react';
import {connect} from 'react-redux';
import {Router, Route, Link, hashHistory} from 'react-router';
import './myPage.scss'
import { Layout, Menu, Breadcrumb, Icon, Carousel} from 'antd';

import NotLogin from './notLoginComponent';
import AlreadyLogged from './alreadyLoggedComponent';
import { cookie } from '../../utils/cookie'
import { message } from 'antd'
import Footer from '../footer/footerComponent'
class MyPage extends React.Component{
    componentDidMount(){
        document.cookie = 'id=1;user="aaa";price=309';
    }
    toOrder() {
        hashHistory.push('orderlist')
    }
   render() {
       var pageChoice = null
       if (cookie.get('userId')) {
           pageChoice = <AlreadyLogged />
       } else {
           pageChoice = <NotLogin />
       }
        return (
            <div id="myPage_cts">
                <div className="myPageTop">
                    {pageChoice}
                    <div className="main_cts">
                        <div className="myorder" onClick={this.toOrder.bind(this)}><span>我的订单</span><Icon type="right" /></div>
                        <div className="msg">
                            <div className="Payment"><Icon type="layout"/><span>待付款</span></div>
                            <div className="Payment"><Link to="/logistics"><Icon type="layout"/><span>查看物流</span></Link></div>
                            <div className="Payment"><Link to="/assess"><Icon type="layout"/><span>待评价</span></Link></div>
                        </div>
                        <div className="wallet">
                            <div>
                                <h3>我的钱包</h3>
                                <ul>
                                    <li><i>0</i><span>礼品卡</span></li>
                                    <li><i>0</i><span>优惠券</span></li>
                                    <li><i>0</i><span>积分</span></li>
                                </ul>
                            </div>
                        </div>
                        <Link to="/managerorder"><div className="manage_shoe">
                            <span>我的鞋管家</span><Icon type="right" />
                        </div></Link>
                        <div className="fun">
                            <ul>
                                <li onClick={this.ba.bind(this)}><Icon type="layout"/><span onClick={this.props.r}>我的收藏</span></li>
                                <li><Link to="/viewhistory"><Icon type="layout"/><span>浏览记录</span></Link></li>
                                <li><Link to="/helpcenter"><Icon type="layout"/><span>帮助中心</span></Link></li>
                                <li><Link to="/feedfack"><Icon type="layout"/><span>意见反馈</span></Link></li>
                                <li><Icon type="layout"/><span>会员中心</span></li>
                                <li><Icon type="layout"/><span>积分商城</span></li>
                                <li><Icon type="layout"/><span>每日签到</span></li>
                                <li><Link to="/server"><Icon type="layout"/><span>联系客服</span></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer_cts">
                    <Footer/>
                </div>
            </div>
        )
   }
    state = {
        zhuangtai: 1
    }

   ba(){
       console.log(this)
       hashHistory.push('/collect')
   }
}

const mapToState = function(state){
    return {
        status:state.collectReducer.status
    }
}

export default MyPage;
// export default connect(mapToState, mypageActions)(MyPage)
