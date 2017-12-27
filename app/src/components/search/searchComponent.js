import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import { Layout, Menu, Breadcrumb, Icon, Carousel, BackTop } from 'antd';
import * as searchAction from './searchAction';
import { browserHistory } from 'react-router';
import './search.scss';
const { Header, Footer, Content } = Layout;
class searchComponent extends React.Component{
    
    componentDidMount(){
      
        
    }
   
    render(){
        return(
            <div id="box">
            <Layout>
                <Header className="header_yj">
                        <div className="search_t clearfix">
                            <div className="back" onClick={this.props.router.goBack}><Icon type="close" /></div>
                            <div className="inputsearch"><input id="search_ipt" placeholder="输入关键词" /></div>
                            <div className="go_search" onClick={this.props.search}><Icon type="search" /></div>
                        </div>
                </Header>
                <Content className="main_yj">
                        <h2>搜索结果如下</h2>
                        <ul>
                            {
                                this.props.dataset.map(function(obj,index){
                                return(
                                    <li key={index} onClick={this.props.toDetail.bind(this,[{goodid:obj.goodid}])}>
                                    <img src={obj.imgurl}/>
                                    <p className="name">{obj.name}</p>
                                    <p>￥<span className="price">{obj.price}</span><span className="Oprice">{obj.Oprice}</span></p>
                                    </li>
                                )
                            }.bind(this))
                         }
                         
                        </ul>
                        
                </Content>
                    
                <Footer className="footer_yj">
                            <div className="home">
                                <Icon type="home" />
                            </div>
                            <div className="all_class">
                                <Icon type="appstore-o" />
                            </div>
                            <div className="shop_car">
                                <Icon type="shopping-cart" />
                            </div>
                            <div className="mine">
                                <Icon type="user" />
                            </div>
                </Footer>
               
            </Layout>
            </div>
            
        )
    }
}

const searchStateToProps = function (state) {
    return {
        // loading: state.search.loading,
        dataset: state.search.body || []
    }
    
}
// export default searchComponent;
export default connect(searchStateToProps, searchAction)(searchComponent)