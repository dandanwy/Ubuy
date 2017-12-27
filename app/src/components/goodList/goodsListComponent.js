import React from 'react';
import ReactDOM from 'react-dom'
import {connect} from 'react-redux';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router'
import * as goodsListActions from '../goodList/goodsListAction'
import { Layout, Menu, Breadcrumb, Icon, Carousel,BackTop} from 'antd'
import "../goodList/goodsList.scss"
import "../../libs/base/rem.js"
const { Header, Footer, Content } = Layout;
class goodsListComponent extends React.Component{
    componentDidMount(){
        var aa=this.props.params.brandname;
        this.props.normalSearch(aa);
        $('.ant-layout-header .anticon-left').click(function(event) {
            window.history.back();
        });
    }
    
    getKeys(item){
        var newObj = (item ? Object.keys(item) : []);
        return newObj
    }
    render(){
      
        return (
    <div>
        <Layout>
          <Header className="goodsListHeader" >
          
          <div className="h_left">
          <Icon type="left" style={{color:'#000',backgroundColor:null}}/></div>
          <div className="h_center"><h1>商品列表</h1></div>
          <div className="h_right"><Icon type="appstore-o" /></div>
          
          <div className="nav">
              <ul>
                  <li onClick={this.props.normalSearch.bind(this,'耐克')}>综合</li>
                  <li onClick={this.props.newSearch}>新品</li>
                  <li onClick={this.props.countSearch}>销量</li>
                  <li onClick={this.props.priceSearch}>价格<Icon type="retweet" /></li>
                  <li onClick={this.props.someSearch}>筛选<Icon type="filter" /></li>
              </ul>
          </div>
          </Header>
          <Content className="contentBody">
                <ul>
                    {
                      this.props.dataset.map(function(obj, index){
                            return (
                                <li key={index} onClick={this.props.toDetail.bind(this,[{imgurl:obj.imgurl},{name:obj.name},{price:obj.price},{Oprice:obj.Oprice},{goodid:obj.goodid}])}>
                                <img src={obj.imgurl}/>
                                <p>{obj.name}</p>
                                <p>￥<span>{obj.price}</span> &nbsp;<del>原价{obj.Oprice}</del></p>

                                </li>
                            )
                        }.bind(this))
                  }
                </ul>
          </Content>
          <div>
            <BackTop>
              <div className="ant-back-top-inner" style={{ position:'fixed',bottom:'1rem'}}><Icon type="up-square" /> </div>
            </BackTop>
            
          </div>
          <div className="someSearch">
              <div className="some_top">
                  <span className="some_close" onClick={this.props.some_close}><Icon type="close" /></span>
                  <div className="button">
                      <span className="some_clear">清空筛选</span>
                      <span className="some_sure">确定</span>
                  </div>
              </div>
              <ul className="some_choose">
                  <li onClick={this.props.fenlei.bind(this,'分类')}>相关分类<span>全部<Icon type="right" /></span></li>
                  <li onClick={this.props.fenlei.bind(this,'价格')}>价格<span>全部<Icon type="right" /></span></li>
                  <li onClick={this.props.fenlei.bind(this,'尺码')}>尺码<span>全部<Icon type="right" /></span></li>
                  <li onClick={this.props.fenlei.bind(this,'颜色')}>颜色<span>全部<Icon type="right" /></span></li>
                  <li onClick={this.props.fenlei.bind(this,'款式')}>款式<span>全部<Icon type="right" /></span></li>
                  <li onClick={this.props.fenlei.bind(this,'风格')}>风格<span>全部<Icon type="right" /></span></li>
                  <li onClick={this.props.fenlei.bind(this,'季节')}>季节<span>全部<Icon type="right" /></span></li>
              </ul>
          </div>
          <div className="someDetail">
              <div className="some_top">
                  <span className="some_left" onClick={this.props.some_left}><Icon type="left" /></span>
                  <div className="button">
                      <h3>相关分类</h3>
                      <span className="some_sure">确定</span>
                  </div>
              </div>
              <ul className="someSmall">

              </ul>
          </div>
          <Footer></Footer>
        </Layout>
    </div>
        )
    }
}

//DataModel => m
const mapToState = function(state){
    // console.log(state);
    return {
        type: state.goodslist.type,
        dataset: state.goodslist.body || []
    }
}

//controller => c

//connect => state and action 
//自动调用 reducer
//自动凋用了 setState
export default connect(mapToState, goodsListActions)(goodsListComponent)