import React from 'react';
import {Router, Route, Link, hashHistory, IndexRoute}  from 'react-router';
import ReactDOM from 'react-dom';
import { Layout, Menu, Breadcrumb, Icon, Avatar , Dropdown} from 'antd';
import {connect} from 'react-redux';
import * as HomeAction from './HomeAction';
import MenuComponent from './MenuComponent';
import './HomeComponent.scss';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const a = '/';

let personal;
let aId;

const menu = (
  <Menu>
    <Menu.Item key="20">
      <Link to={'/admins_list' }>修改个人信息</Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="21">
      <Link to="/login">退出登录</Link>
    </Menu.Item>
  </Menu>
);

class HomeComponent extends React.Component {
  state = {
    collapsed: false,
  };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }
	render(){
        return (
          <Layout style={{ minHeight: '100vh' }}>
            <Sider
              collapsible
              collapsed={this.state.collapsed}
              onCollapse={this.onCollapse}
            >
              <div className="logo" >后台管理系统</div>

              <MenuComponent permission={this.state.permission} />
            </Sider>
            <Layout>
              <Header style={{ background: '#fff', padding: 0 }} >
                <Breadcrumb style={{ margin: '0 16px' }}>
                  <Breadcrumb.Item><Link to="/">首页</Link></Breadcrumb.Item>
                  
                </Breadcrumb>
                <Dropdown overlay={menu} trigger={['click']}>
                  <Avatar style={{ backgroundColor: '#108ee9', position: 'absolute', top: 20, right: 30 }} icon="user" />
                </Dropdown>
              </Header>
              <Content style={{ margin: '16px 0 0 16px' }}>
                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                  {this.props.children}
                </div>
              </Content>
            </Layout>
          </Layout>
		  )
	}
}
const mapStateToProps = function(){
    return {

    }
}
export default connect(mapStateToProps, HomeAction)(HomeComponent)