import React from 'react';
import ReactDOM from 'react-dom'
import {connect} from 'react-redux';
import "../../libs/base/rem.js"
import { Layout, Menu, Breadcrumb, Icon, Carousel,BackTop,Select ,Spin, Modal, Button,Radio, message} from 'antd'
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router'
import * as detailActions from '../detail/detailAction'

import "../detail/detail.scss"
const { Header, Footer, Content } = Layout;

class detailComponent extends React.Component{
    componentDidMount(){
      var aa=this.props.params.goodid;
        this.props.getGoodDetail(aa);
         $('.ant-layout-header .anticon-left').click(function(event) {
            window.history.back();
        }); 
    }
     state = {
          loading: false,
          visible: false,
        }
        showModal = () => {
          this.setState({
            visible: true,
          });
        }
        handleOk = () => {
          
          
            this.setState({ loading: false, visible: false });
         
           var size=$('.ant-radio-button-wrapper-checked').text()*1;
           var goodid = this.props.params.goodid;

          this.props.addCar({size:size,goodid:goodid,userid:1});
        }
        handleCancel = () => {
          this.setState({ visible: false });
        }
    getKeys(item){
        var newObj = (item ? Object.keys(item) : []);
        return newObj
    }
    toCar(){
      hashHistory.push('/car')
     }
     total(){
      hashHistory.push('/car')
     }
    

  Change(e) {
      console.log(`radio checked:${e.target.value}`);
      }
    render(){
      const { visible, loading } = this.state;
       const RadioButton = Radio.Button;
    const RadioGroup = Radio.Group;
        return (
            <div>
                 <Layout>
                      <Header className="detailHeader">
                      <span className="icon"><i><Icon type="left" /></i></span>
                      
                      <span className="icon"><i><Icon type="heart-o" /></i></span>
                      <span className="icon "><i><Icon type="share-alt" /></i></span>
                      </Header>
                      <Content className="detailContent">
                      {
                        this.props.dataset.slice(0,1).map(function(item,index){
                            return (
                            <div className="detailBody" key={index}> 
                            <div className="banner">
                                    <img src={item.imgurl}/>
                            </div>
                            <div className="introduce">{item.name}</div>
                            <div className="fenlei">{item.name.slice(-16,-8)}</div>
                            <div className="price">￥{item.price} <span>￥<del>{item.Oprice}</del></span><span className="pr">无可用优惠券</span></div>
                            <div className="choose">已选 <span className="thscolor">{item.color}</span>
                     <span className="chooseSize">请选择尺码<Icon type="right" /></span> <Icon type="down" />       
        
    
               
      
    
                            </div>
                            <div className="preview"></div>
                            <div className="brand">
                            <div>
                            品牌:<span>{item.name.slice(0,4)}</span>
                            </div>
                            <div>
                            发货:<span>百丽优购</span>
                            </div>
                            </div>
                            
                            
                            <div className="ifLike">
                           <div className="likeTop">
                           <span>喜欢此商品的人还买了</span>
                           </div>
                           <div className="likeBody"></div>
                           </div>
                           <div className="help"><i><Icon type="customer-service" /></i><span>联系客服</span> </div>
                            <div className="moreDetail">上拉查看详情</div>
                            <div className="abc"><Spin size="large"/></div>
                          </div>
                            )
                        })


                      }
                      </Content>
                       <div>
                        
                        <Modal
                          visible={visible}
                          title="请选择尺码"
                          onOk={this.handleOk}
                          onCancel={this.handleCancel}
                          footer={[
                            <Button key="back" onClick={this.handleCancel}>取消</Button>,
                            <Button key="submit" type="primary" loading={loading} onClick={this.handleOk} style={{backgroundColor:'#f90'}}>
                              加入购物车
                            </Button>,
                          ]}

                        >
                        <div>
                          
                          <div style={{ marginTop: 16 }}>
                            <RadioGroup onChange={this.Change} defaultValue="a">
                              <RadioButton value="a">35</RadioButton>
                              <RadioButton value="b">36</RadioButton>
                              <RadioButton value="c">37</RadioButton>
                              <RadioButton value="d">38</RadioButton>
                              <RadioButton value="e">39</RadioButton>
                              <RadioButton value="f">40</RadioButton>
                              <RadioButton value="g">41</RadioButton>
                              <RadioButton value="h">42</RadioButton>
                            </RadioGroup>
                          </div>
                          
                        </div>
                        </Modal>
                      </div>
                      <Footer className="detailFooter">
                      <div className="left" onClick={this.toCar}>
                      <span className="carCount"></span>
                            <Icon type="shopping-cart" />
                      </div>
                      <div className="center" onClick={this.props.addCar}>
                        <Button type="primary" onClick={this.showModal} style={{background:'transparent',border:'none',width:'100%',height:'100%',fontSize:'0.22rem'}}>
                         加入购物车
                        </Button>
                      </div>
                      <div className="right" onClick={this.total}>
                        去结算
                      </div>
                      </Footer>
                       <div>
                        <BackTop>
                          <div className="ant-back-top-inner" style={{ position:'fixed',bottom:'1rem'}}><Icon type="up-square" /></div>
                        </BackTop>
                        
                        <strong style={{ color: '#1088e9' }}> blue </strong>
                      
                      </div>
                      <div onClick={this.props.detailHistory}>
                        <BackTop>
                          <div className="ant-back-top-inner" style={{ position:'fixed',bottom:'1.5rem'}}><Icon type="eye" /></div>
                        </BackTop>
                    
                      </div>
                </Layout>
            </div>
            )
    }
}
const mapToState = function(state){
    console.log('detail',state.detail.type);
    return {
        type: state.detail.type,
        dataset: state.detail.body || []
    }
}

//controller => c

//connect => state and action 
//自动调用 reducer
//自动凋用了 setState
export default connect(mapToState, detailActions)(detailComponent)