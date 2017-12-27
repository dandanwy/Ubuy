import React from 'react';
import {connect} from 'react-redux';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import * as orderAction from './orderAction';
import './order.scss'

import { Layout, Menu, Breadcrumb, Icon, Carousel, Radio,InputNumber} from 'antd';
import { browserHistory } from 'react-router';

class orderComponent extends React.Component{
    // state = {
    //     orderData:JSON.parse(sessionStorage.getItem('orderinfo'))
    // }
    componentDidMount(){
        this.props.getData("order_sel.php",{"ordergoods":sessionStorage.getItem('orderinfo')})
    } 
    componentDidUpdate(){
        if(!this.props.dataset){
            return null
        }else{
            var goodsinfo = this.props.dataset;
        }
        // 商品总数量
        var numtotle = 0;
        // 商品总金额
        var totleOprice = 0;
        // 节省金额
        var savemoney = 0;
        // 应付金额
        var paymoney = 0;
        
        for(var i=0;i<goodsinfo.length;i++){
            numtotle += goodsinfo[i].goodnum*1;
            totleOprice += goodsinfo[i].Oprice*goodsinfo[i].goodnum;
            paymoney += goodsinfo[i].price*goodsinfo[i].goodnum;
        }
        savemoney = totleOprice - paymoney;
        document.getElementsByClassName('numbertotle')[0].innerText = numtotle;
        document.getElementsByClassName('totleoprice')[0].innerText = totleOprice;
        document.getElementsByClassName('paymoney')[0].innerText = paymoney;
        document.getElementsByClassName('savepricetotle')[0].innerText = savemoney;
        // 积分
        document.getElementsByClassName('crenum')[0].innerText = paymoney;
    }

    // 返回购物车
    back(){
        // history.back();
        hashHistory.push('/car');
    }

    // 提交订单
    submitorder(){
        var time = Date.parse( new Date());
        var params = JSON.parse(sessionStorage.getItem('orderinfo'));
        
        for(let item of params){
            delete item.carid;
            item.status = 2;
            item.orderno = time;
        }
        this.props.insertorder("order_insert.php",{"ordergoods":JSON.stringify(params)});

        var paramsdel = JSON.parse(sessionStorage.getItem('orderinfo'));
        var str = '';
        for(let item2 of paramsdel){
            str += item2.carid + ',';
        }
        str = str.slice(0,-1);
        console.log(str);
        this.props.delorder("orderdelcar.php",{"ordergoods":str});
        hashHistory.push('/car');
    }

    render(){
        if(!this.props.dataset){
            return null
        }
        return(
            <div className="box_order_wy">
                <div className="header_order">
                    <div className="header_order_l" onClick={this.back}>
                        <Icon type="left"></Icon>
                    </div>
                    <h3>结算中心</h3>
                </div>
                <div className="main_order">
                    <div className="address">
                        <p><Icon type="environment-o" className="address_icon"></Icon>收货地址</p>
                        <div className="address_add">
                            <span>请添加收货地址</span>
                            <Icon type="right" className="address_add_icon"></Icon>
                        </div>
                    </div>
                    <div className="settime">
                        <p><Icon type="calendar" className="calendar"></Icon>选择配送时间</p>
                        <div className="timesel">
                            <ul>
                                <li>工作日、双休日与假日均可送货</li>
                                <li>仅工作日送货（周一至周五）</li>
                                <li>仅周末送货（周六、周日）</li>
                            </ul>
                        </div>
                    </div>
                    <div className="settime">
                        <p><Icon type="pay-circle-o" className="calendar"/>选择支付方式</p>
                        <div className="timesel">
                            <ul>
                                <li>支付宝钱包支付</li>
                                <li>银联支付</li>
                                <li>招商银行</li>
                            </ul>
                        </div>
                    </div>
                    <div className="giftItem">
                        <p><Icon type="gift" className="gift"/>使用优惠券与礼品卡</p>
                        <div className="giftitem">
                            <div className="giftcol1"><span>使用优惠券</span><Icon type="right" className="gifticon"/></div>
                            <div className="giftcol2"><span>使用礼品卡</span><Icon type="right" className="gifticon"/></div>
                        </div>
                    </div>
                    <div className="ordergoods">
                        <p><Icon type="exception" className="exception"/>商品信息</p>
                        <ul>
                            {
                                this.props.dataset.map(function(obj, index){
                                    return(
                                        <li key={'goods' + index}>
                                            <div className="goodsinfo">
                                                <div className="goodsinfo_l">
                                                    <img src={obj.imgurl} alt=""/>
                                                </div>
                                                <div className="goodsinfo_r">
                                                    <div className="title">{obj.name}</div>
                                                    <div className="colorsize">
                                                        <div className="color">{obj.color}</div>
                                                        <div className="size">{obj.size}</div>
                                                    </div>
                                                    <div className="pricenum">
                                                        <div className="price"><b>￥</b><b className="pri">{obj.price}</b></div>
                                                        <div className="num"><i>&times;</i><i className="goodsnum">{obj.goodnum}</i></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="settlement">
                        <p><Icon type="pie-chart" className="pie-chart"/>结算明细</p>
                        <div><span>数量</span><span className="totlenum"><i className="numbertotle"></i>件</span></div>
                        <div><span>商品总金额</span><span className="totleprice">￥<i className="totleoprice"></i></span></div>
                        <div><span>节省金额</span><span className="saveprice"><i className="spare">-</i>￥<i className="savepricetotle"></i></span></div>
                        <div><span>运费</span><span className="freight">￥<i className="freightnum">0</i></span></div>
                    </div>
                    <div className="credits"><span>可获得积分</span><span className="creditsnum"><i className="crenum"></i>积分</span></div>
                </div>
                <div className="footer_order">
                    <div className="footer_order_l">应付金额：<span><b>￥</b><b className="paymoney"></b></span></div>
                    <div className="footer_order_r" onClick={this.submitorder.bind(this)}>确定订单</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = function(state){
    // console.log(state);
    return {
        loading: state.order.loading,
        dataset: state.order.response
    }
}

export default connect(mapStateToProps, orderAction)(orderComponent)