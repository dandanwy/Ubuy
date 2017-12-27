import React from 'react';
import {connect} from 'react-redux';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import { Layout, Menu, Breadcrumb, Icon, Carousel, BackTop} from 'antd';
import * as homeAction from './homeAction';
import { browserHistory } from 'react-router';
import './home.scss';
import Foot from '../footer/footerComponent'
class homeComponent extends React.Component{
    componentDidMount() {
        this.props.getUhui("Uhui.php", { brandid: 1 })
    }
    search(){
        hashHistory.push('search')
    }
    cia(){
        hashHistory.push('cia')
    }
    render() {
        return (
            <div id="box">
              
              <div className="header">
                <ul className="ul_h clearfix">
                    <li><Icon type="camera" style={{ fontSize: 50, color: '#666' ,lineHeight:'60px'}}/></li>
                    <li onClick={this.search}><span></span><input placeholder="思加图女鞋"/></li>
                    <li><Icon type="message" style={{ fontSize: 50, color: '#666' ,lineHeight:'60px'}}/></li>
                </ul>
              </div>
              <div className="homemain">
                <div className="autopic">
                        <Carousel autoplay>
                            <div><img src="https://i1.ygimg.cn/pics/mobile/homepage/2017/12/1513936360076.jpg"/></div>
                            <div><img src="https://i1.ygimg.cn/pics/mobile/homepage/2017/12/1513907541891.jpg"/></div>
                            <div><img src="https://i1.ygimg.cn/pics/mobile/homepage/2017/12/1513750271068.jpg"/></div>
                            <div><img src="https://i1.ygimg.cn/pics/mobile/homepage/2017/12/1513923039325.jpg"/></div>
                        </Carousel>
                </div>
                <div className="newflash clearfix">
                    <div className="newfl">U购快讯</div>
                    <div className="newfr">
                        <ul>
                            <li>限时特惠即将关闭</li>
                        </ul>
                    </div>
                </div>
                <div className="newshop">
                    <div className="newshop1" onClick={this.cia}><p>总有低价</p><p>CIA</p></div>
                    <div className="newshop2"><p>新品着陆</p><p>NEWS</p></div>
                    <div className="newshop3"><p>潮牌甄选</p><p>FASHION</p></div>
                    <div className="newshop4"><p>优惠中心</p><p>PREFECT</p></div>
                </div>
                <div className="buytime">
                    <div className="buytimet">
                        <div className="buyt_head">
                            <span className="buyt_headl">U惠购&nbsp;&nbsp;&nbsp;</span>
                            <span className="buyt_headr">查看更多</span>
                        </div>
                       
                    </div>
                    <div className="buytimeb">
                         <div className="buyt_main">
                            <ul className="buytm">

                                <li>
                                    <div className="buytmpic"><img src="http://club.sina.com.cn.sinastorage.com/09/05/14/1517338902_7d30ad84a7bfb4b672902f874ae801fc.jpg"/></div>
                                    <div><span className="price">388.0</span><span className="Oprice">1700.0</span></div>
                                </li>
                                 <li>
                                    <div className="buytmpic"><img src="http://club.sina.com.cn.sinastorage.com/09/05/14/1517338902_7d30ad84a7bfb4b672902f874ae801fc.jpg"/></div>
                                    <div><span className="price">388.0</span><span className="Oprice">1700.0</span></div>
                                </li>
                                 <li>
                                    <div className="buytmpic"><img src="http://club.sina.com.cn.sinastorage.com/09/05/14/1517338902_7d30ad84a7bfb4b672902f874ae801fc.jpg"/></div>
                                    <div><span className="price">388.0</span><span className="Oprice">1700.0</span></div>
                                </li>
                                 <li>
                                    <div className="buytmpic"><img src="http://club.sina.com.cn.sinastorage.com/09/05/14/1517338902_7d30ad84a7bfb4b672902f874ae801fc.jpg"/></div>
                                    <div><span className="price">388.0</span><span className="Oprice">1700.0</span></div>
                                </li>
                                 <li>
                                    <div className="buytmpic"><img src="http://club.sina.com.cn.sinastorage.com/09/05/14/1517338902_7d30ad84a7bfb4b672902f874ae801fc.jpg"/></div>
                                    <div><span className="price">388.0</span><span className="Oprice">1700.0</span></div>
                                </li>
                                 <li>
                                    <div className="buytmpic"><img src="http://club.sina.com.cn.sinastorage.com/09/05/14/1517338902_7d30ad84a7bfb4b672902f874ae801fc.jpg"/></div>
                                    <div><span className="price">388.0</span><span className="Oprice">1700.0</span></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="brandnews">
                    <div className="brandnewst">
                        <i></i><span>品牌资讯</span>
                    </div>
                    <div className="brandnewsb clearfix">
                        <ul className="clearfix">
                            <li><img src="https://i1.ygimg.cn/pics/mobile/homepage/2017/12/1513562571949.jpg"/></li>
                            <li><img src="https://i1.ygimg.cn/pics/mobile/homepage/2017/12/1513320288046.jpg"/></li>
                            <li><img src="https://i1.ygimg.cn/pics/mobile/homepage/2017/12/1513320292032.jpg"/></li>
                            <li><img src="https://i1.ygimg.cn/pics/mobile/homepage/2017/12/1513320296309.jpg"/></li>
                            <li><img src="https://i1.ygimg.cn/pics/mobile/homepage/2017/12/1513320305786.jpg"/></li>
                            <li><img src="https://i1.ygimg.cn/pics/mobile/homepage/2017/12/1513320309172.jpg"/></li>
                            <li><img src="https://i1.ygimg.cn/pics/mobile/homepage/2017/12/1513320312758.jpg"/></li>
                            <li><img src="https://i1.ygimg.cn/pics/mobile/homepage/2017/12/1513319137333.jpg"/></li>
                        </ul>
                    </div>
                </div>
                <div className="weekbest">
                    <div className="weekt">
                        <img src="http://i1.ygimg.cn/pics/mobile/homepage/2017/05/1494580926544.jpg"/>
                    </div>
                    <div className="weekmain clearfix">
                        <ul className="weekmainul clearfix">
                            <li><img src="https://i1.ygimg.cn/pics/mobile/homepage/2017/12/1513321355762.jpg"/></li>
                            <li><img src="https://i1.ygimg.cn/pics/mobile/homepage/2017/12/1513321359460.jpg"/></li>
                            <li><img src="https://i1.ygimg.cn/pics/mobile/homepage/2017/12/1513321364020.jpg"/></li>
                            <li><img src="https://i1.ygimg.cn/pics/mobile/homepage/2017/12/1513321372141.jpg"/></li>
                        </ul>
                    </div>
                    
                </div>
                <div className="newsgood">
                    <div className="newsgt">
                        <img src="http://i1.ygimg.cn/pics/mobile/homepage/2017/05/1494581057027.jpg"/>
                    </div>
                    <div className="newsgmain">
                        <ul className="newsgul">
                            <li><img src="https://i1.ygimg.cn/pics/mobile/homepage/2017/12/1513320344117.jpg"/></li>
                            <li><img src="https://i1.ygimg.cn/pics/mobile/homepage/2017/12/1513320348722.jpg"/></li>
                            <li><img src="https://i1.ygimg.cn/pics/mobile/homepage/2017/12/1513320352982.jpg"/></li>
                            <li><img src="https://i1.ygimg.cn/pics/mobile/homepage/2017/12/1513320356491.jpg"/></li>
                            <li><img src="https://i1.ygimg.cn/pics/mobile/homepage/2017/12/1513320367971.jpg"/></li>
                            <li><img src="https://i1.ygimg.cn/pics/mobile/homepage/2017/12/1513320371269.jpg"/></li>
                        </ul>
                    </div>
                    <div className="newsgb">
                        <img src="https://i1.ygimg.cn/pics/mobile/homepage/2017/12/1513582982026.jpg"/>
                    </div>
                </div>
                <div className="manmust">
                    <div className="manmt">
                        <img src="http://i1.ygimg.cn/pics/mobile/homepage/2017/05/1494581742280.jpg"/>
                    </div>
                    <div className="manmm">
                        <ul className="manmmul">
                            <li><img src="https://i1.ygimg.cn/pics/mobile/homepage/2017/12/1513320418454.jpg"/></li>
                            <li><img src="https://i1.ygimg.cn/pics/mobile/homepage/2017/12/1513320421890.jpg"/></li>
                            <li><img src="https://i1.ygimg.cn/pics/mobile/homepage/2017/12/1513320407045.jpg"/></li>
                            <li><img src="https://i1.ygimg.cn/pics/mobile/homepage/2017/12/1513320410427.jpg"/></li>
                            <li><img src="https://i1.ygimg.cn/pics/mobile/homepage/2017/12/1513320434050.jpg"/></li>
                            <li><img src="https://i1.ygimg.cn/pics/mobile/homepage/2017/12/1513320437678.jpg"/></li>
                            <li><img src="https://i1.ygimg.cn/pics/mobile/homepage/2017/12/1513567143175.jpg"/></li>
                            <li><img src="https://i1.ygimg.cn/pics/mobile/homepage/2017/12/1513320447211.jpg"/></li>
                        </ul>
                    </div>
                </div>
                <div className="reshoe">
                    <img src="https://i1.ygimg.cn/pics/mobile/homepage/2017/12/1513320459715.jpg"/>
                </div>
                <div className="spring">
                    <div className="springt">
                        <img src="http://i1.ygimg.cn/pics/mobile/homepage/2017/05/1494582114954.jpg"/>
                    </div>
                    <div className="springm">
                        <ul className="springmul">
                            <li><img src="https://i1.ygimg.cn/pics/mobile/homepage/2017/12/1513321389734.jpg"/></li>
                            <li><img src="https://i1.ygimg.cn/pics/mobile/homepage/2017/12/1513321393483.jpg"/></li>
                            <li><img src="https://i1.ygimg.cn/pics/mobile/homepage/2017/12/1513321398854.jpg"/></li>
                            <li><img src="https://i1.ygimg.cn/pics/mobile/homepage/2017/12/1513321402097.jpg"/></li>
                            <li><img src="https://i1.ygimg.cn/pics/mobile/homepage/2017/12/1513321415136.jpg"/></li>
                            <li><img src="https://i1.ygimg.cn/pics/mobile/homepage/2017/12/1513321419821.jpg"/></li>
                        </ul>
                    </div>
                </div>
                <div className="fashion">
                    <div className="fashiont">
                        <img src="http://i1.ygimg.cn/pics/mobile/homepage/2017/05/1494582322593.jpg"/>
                    </div>
                    <div className="fashionm">
                        <ul className="fashionmul">
                            <li><img src="https://i1.ygimg.cn/pics/mobile/homepage/2017/12/1513321437949.jpg"/></li>
                            <li><img src="https://i1.ygimg.cn/pics/mobile/homepage/2017/12/1513321442851.jpg"/></li>
                            <li><img src="https://i1.ygimg.cn/pics/mobile/homepage/2017/12/1513321447118.jpg"/></li>
                        </ul>
                    </div>
                </div>
                <div className="guess">
                    <div className="guesst">
                        猜你喜欢
                    </div>
                    <div className="guessm">
                        <ul className="guessmul">
                            <li>
                                <img src="http://i2.ygimg.cn/pics/puma/2017/100576362/100576362_01_mb.jpg?2"/>
                                <p className="name">【彪马572960黑色】PUMA彪马 2017新款女子彪马生活系列夹克57296001</p>
                                <span className="price">￥666.0</span><span className="Oprice">1299.0</span>
                            </li>
                             <li>
                                <img src="http://i2.ygimg.cn/pics/puma/2017/100576362/100576362_01_mb.jpg?2"/>
                                <p className="name">【彪马572960黑色】PUMA彪马 2017新款女子彪马生活系列夹克57296001</p>
                                <span className="price">￥666.0</span><span className="Oprice">1299.0</span>
                            </li>
                             <li>
                                <img src="http://i2.ygimg.cn/pics/puma/2017/100576362/100576362_01_mb.jpg?2"/>
                                <p className="name">【彪马572960黑色】PUMA彪马 2017新款女子彪马生活系列夹克57296001</p>
                                <span className="price">￥666.0</span><span className="Oprice">1299.0</span>
                            </li>
                             <li>
                                <img src="http://i2.ygimg.cn/pics/puma/2017/100576362/100576362_01_mb.jpg?2"/>
                                <p className="name">【彪马572960黑色】PUMA彪马 2017新款女子彪马生活系列夹克57296001</p>
                                <span className="price">￥666.0</span><span className="Oprice">1299.0</span>
                            </li>
                             <li>
                                <img src="http://i2.ygimg.cn/pics/puma/2017/100576362/100576362_01_mb.jpg?2"/>
                                <p className="name">【彪马572960黑色】PUMA彪马 2017新款女子彪马生活系列夹克57296001</p>
                                <span className="price">￥666.0</span><span className="Oprice">1299.0</span>
                            </li>
                             <li>
                                <img src="http://i2.ygimg.cn/pics/puma/2017/100576362/100576362_01_mb.jpg?2"/>
                                <p className="name">【彪马572960黑色】PUMA彪马 2017新款女子彪马生活系列夹克57296001</p>
                                <span className="price">￥666.0</span><span className="Oprice">1299.0</span>
                            </li>
                        </ul>
                    </div>
                </div>
                    <BackTop>
                        <div className="ant-back-top-inner">78779<Icon type="up-square" /></div>
                    </BackTop>
              </div>
               

              <Foot/>
            </div>
             
        )
    }
  

}

const mapStateToProps = function(state){
    var dataset  = state.home.dataset || '[]';
   
    return {
        loading: state.home.loading,
        dataset: dataset[0] || []
    }
}

export default connect(mapStateToProps, homeAction)(homeComponent)