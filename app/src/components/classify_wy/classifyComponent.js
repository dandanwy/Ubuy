import React from 'react';
import {connect} from 'react-redux';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import * as classifyAction from './classifyAction';
import './classify.scss'

import {Icon, Tabs, Select, Row, Col} from 'antd';
import Foot from '../footer/footerComponent'
const TabPane = Tabs.TabPane;
const Option = Select.Option;


class classifyComponent extends React.Component{
    state = {
        tabPosition1: 'left',
    }
    changeTabPosition = (tabPosition1) => {
        this.setState({ tabPosition1 });
    }
    componentDidMount(){
        $('.ant-col-8').click(function(event){
            var ro ="/goodslist/"+$(event.target).parent().children('div').text()
            hashHistory.push(ro);
        })
    }
    render (){
        return(
            <div className="box_wy">
                <div className="header_classify">
                    <div className="header_classify_l">
                        <Icon type="left"></Icon>
                    </div>
                    <div className="header_classify_c">
                        <input type="text" placeholder="请输入关键字" className="search_input"/>
                        <Icon type="search" className="search"></Icon>
                    </div>
                    <div className="header_classify_r">
                        <Icon type="bars"></Icon>
                    </div>
                </div>
                <div className="main_classify">
                    <div className="main_classify_l">
                        <Tabs tabPosition={this.state.tabPosition1}>
                            <TabPane tab="女鞋" key="1" className="iteml">
                                <div className="main_classify_r">
                                    <div className="header_logo_img">
                                        <img src={require('../../libs/images/womenShoes.jpg')} alt=""/>
                                    </div>
                                    <div className="hot_brand">
                                    <Link to="/goodslist"><h3>热门品牌</h3></Link>
                                        <Row>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                <div>百丽</div>
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                <div>天美意</div>
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/tata_wy.jpg')} alt=""/>
                                                <div>他她</div>
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/bata_wy.jpg')} alt=""/>
                                                <div>拔佳</div>
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/sacc_wy.jpg')} alt=""/>
                                                <div>思加图</div>
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/bassto_wy.jpg')} alt=""/>
                                                <div>百思图</div>
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/senda_wy.jpg')} alt=""/>
                                                <div>森达</div>
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/miaoli_wy.jpg')} alt=""/>
                                                <div>妙丽</div>
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/search_wy.jpg')} alt=""/>
                                                <div className="ys_wy">全部商品</div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>极简实穿</h3>
                                        <Row>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                <div>小白鞋</div>
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/lefu_wy.jpg')} alt=""/>
                                                <div>乐福鞋</div>
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/xiuxian_wy.jpg')} alt=""/>
                                                <div>休闲鞋</div>
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/songgao.jpg')} alt=""/>
                                                <div>松糕鞋</div>
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/fanbu_wy.jpg')} alt=""/>
                                                <div>帆布鞋</div>
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/yundong_wy.jpg')} alt=""/>
                                                <div>运动风</div>
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/doudou.jpg')} alt=""/>
                                                <div>豆豆鞋</div>
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/hunxie_wy.jpg')} alt=""/>
                                                <div>婚鞋</div>
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/leizg_wy.jpg')} alt=""/>
                                                <div>内增高</div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>女士单鞋</h3>
                                        <Row>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                <div>鱼嘴</div>
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/lefu_wy.jpg')} alt=""/>
                                                <div>浅口鞋</div>
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/xiuxian_wy.jpg')} alt=""/>
                                                <div>布洛克鞋</div>
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/songgao.jpg')} alt=""/>
                                                <div>凉拖鞋</div>
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/fanbu_wy.jpg')} alt=""/>
                                                <div>豆豆鞋</div>
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/yundong_wy.jpg')} alt=""/>
                                                <div>休闲鞋</div>
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/doudou.jpg')} alt=""/>
                                                <div>及踝鞋</div>
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/hunxie_wy.jpg')} alt=""/>
                                                <div>懒人鞋</div>
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/leizg_wy.jpg')} alt=""/>
                                                <div>淑女</div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>女士靴子</h3>
                                        <Row>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                <div>鱼嘴</div>
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/lefu_wy.jpg')} alt=""/>
                                                <div>浅口鞋</div>
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/xiuxian_wy.jpg')} alt=""/>
                                                <div>布洛克鞋</div>
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/songgao.jpg')} alt=""/>
                                                <div>凉拖鞋</div>
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/fanbu_wy.jpg')} alt=""/>
                                                <div>豆豆鞋</div>
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/yundong_wy.jpg')} alt=""/>
                                                <div>休闲鞋</div>
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/doudou.jpg')} alt=""/>
                                                <div>及踝鞋</div>
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/hunxie_wy.jpg')} alt=""/>
                                                <div>懒人鞋</div>
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/leizg_wy.jpg')} alt=""/>
                                                <div>淑女</div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>女士凉鞋</h3>
                                        <Row>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                <div>鱼嘴</div>
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/lefu_wy.jpg')} alt=""/>
                                                <div>浅口鞋</div>
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/xiuxian_wy.jpg')} alt=""/>
                                                <div>布洛克鞋</div>
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/songgao.jpg')} alt=""/>
                                                <div>凉拖鞋</div>
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/fanbu_wy.jpg')} alt=""/>
                                                <div>豆豆鞋</div>
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/yundong_wy.jpg')} alt=""/>
                                                <div>休闲鞋</div>
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/doudou.jpg')} alt=""/>
                                                <div>及踝鞋</div>
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/hunxie_wy.jpg')} alt=""/>
                                                <div>懒人鞋</div>
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/leizg_wy.jpg')} alt=""/>
                                                <div>淑女</div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tab="男鞋" key="2" className="iteml">
                                <div className="main_classify_r">
                                    <div className="header_logo_img">
                                        <img src={require('../../libs/images/manShoes.jpg')} alt=""/>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>热门品牌</h3>
                                        <Row>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>极简实穿</h3>
                                        <Row>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>女士单鞋</h3>
                                        <Row>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>女士靴子</h3>
                                        <Row>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>女士凉鞋</h3>
                                        <Row>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tab="运动" key="3" className="iteml">
                                <div className="main_classify_r">
                                    <div className="header_logo_img">
                                        <img src={require('../../libs/images/sports_wy.jpg')} alt=""/>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>热门品牌</h3>
                                        <Row>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>极简实穿</h3>
                                        <Row>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>女士单鞋</h3>
                                        <Row>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>女士靴子</h3>
                                        <Row>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>女士凉鞋</h3>
                                        <Row>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tab="户外" key="4" className="iteml">
                                <div className="main_classify_r">
                                    <div className="header_logo_img">
                                        <img src={require('../../libs/images/huwai.jpg')} alt=""/>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>热门品牌</h3>
                                        <Row>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>极简实穿</h3>
                                        <Row>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>女士单鞋</h3>
                                        <Row>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>女士靴子</h3>
                                        <Row>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>女士凉鞋</h3>
                                        <Row>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tab="童鞋童装" key="5" className="iteml">
                                <div className="main_classify_r">
                                    <div className="header_logo_img">
                                        <img src={require('../../libs/images/child_wy.jpg')} alt=""/>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>热门品牌</h3>
                                        <Row>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>极简实穿</h3>
                                        <Row>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>女士单鞋</h3>
                                        <Row>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>女士靴子</h3>
                                        <Row>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>女士凉鞋</h3>
                                        <Row>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tab="全部品牌" key="6" className="iteml">
                                <div className="main_classify_r">
                                    <div className="header_logo_img">
                                        <img src={require('../../libs/images/womenShoes.jpg')} alt=""/>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>热门品牌</h3>
                                        <Row>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>极简实穿</h3>
                                        <Row>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>女士单鞋</h3>
                                        <Row>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>女士靴子</h3>
                                        <Row>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>女士凉鞋</h3>
                                        <Row>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tab="专柜同款" key="7" className="iteml">
                                <div className="main_classify_r">
                                    <div className="header_logo_img">
                                        <img src={require('../../libs/images/shoppe_wy.jpg')} alt=""/>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>热门品牌</h3>
                                        <Row>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>极简实穿</h3>
                                        <Row>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>女士单鞋</h3>
                                        <Row>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>女士靴子</h3>
                                        <Row>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>女士凉鞋</h3>
                                        <Row>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tab="她他" key="8" className="iteml">
                                <div className="main_classify_r">
                                    <div className="header_logo_img">
                                        <img src={require('../../libs/images/womenShoes.jpg')} alt=""/>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>热门品牌</h3>
                                        <Row>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>极简实穿</h3>
                                        <Row>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>女士单鞋</h3>
                                        <Row>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>女士靴子</h3>
                                        <Row>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>女士凉鞋</h3>
                                        <Row>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tab="天美意" key="9" className="iteml">
                                <div className="main_classify_r">
                                    <div className="header_logo_img">
                                        <img src={require('../../libs/images/womenShoes.jpg')} alt=""/>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>热门品牌</h3>
                                        <Row>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>极简实穿</h3>
                                        <Row>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>女士单鞋</h3>
                                        <Row>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>女士靴子</h3>
                                        <Row>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>女士凉鞋</h3>
                                        <Row>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tab="百丽" key="10" className="iteml">
                                <div className="main_classify_r">
                                    <div className="header_logo_img">
                                        <img src={require('../../libs/images/womenShoes.jpg')} alt=""/>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>热门品牌</h3>
                                        <Row>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>极简实穿</h3>
                                        <Row>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>女士单鞋</h3>
                                        <Row>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>女士靴子</h3>
                                        <Row>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>女士凉鞋</h3>
                                        <Row>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tab="思加图" key="11" className="iteml">
                                <div className="main_classify_r">
                                    <div className="header_logo_img">
                                        <img src={require('../../libs/images/womenShoes.jpg')} alt=""/>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>热门品牌</h3>
                                        <Row>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>极简实穿</h3>
                                        <Row>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>女士单鞋</h3>
                                        <Row>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>女士靴子</h3>
                                        <Row>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>女士凉鞋</h3>
                                        <Row>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8} >
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tab="森达" key="12" className="iteml">Content of Tab 2</TabPane>
                        </Tabs>
                    </div> 
                   <div className="main_classify_r"></div>
                </div>
                <Foot/>
            </div>
        )
    }
}

const mapStateToProps = function(state){
    var dataset  = state.car.dataset || '[]';
    return {
        loading: state.car.loading,
        dataset: dataset[0] || []
    }
}

export default connect(mapStateToProps, classifyAction)(classifyComponent)
