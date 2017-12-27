import React from 'react';
import { Router, Route, Link, hashHistory, IndexRoute, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import { Layout, Menu, Breadcrumb, Icon, Avatar, Dropdown, Form, Input, Button, Checkbox } from 'antd';

import './loginJS.js'
import './login.scss'
import * as loginAction from './loginAction'

const FormItem = Form.Item;


class NormalLoginForm extends React.Component {


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                // console.log('Received values of form: ', values);
            }
        });
    }
    
    find() {
        var username = $('#userName').val();
        var password = $('#password').val();
        this.props.Find({username:username,password:password});
        var res = this.props.personal;
        

        setTimeout(function (){
            if (res) {
                if (res.data1.length == '0') {
                    alert('用户名或密码错误')
                } else if (username == res.data1[0].username && password != res.data1[0].password) {
                    alert('密码错误')
                } else {
                    hashHistory.push('/');
                }
            }
        }.bind(this),100)
       
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div id="LoginDL">
                <Form onSubmit={this.handleSubmit} className="login-form" className="loginForm">
                    <h1>后台管理系统登录</h1>
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: '请输入你的登录账号!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="请输入你的登录账号" />
                            )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入你的登录密码!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="请输入你的登录密码" />
                            )}
                    </FormItem>
                    <FormItem>

                        <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.find.bind(this)} >
                            登录
                </Button>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);


const mapStateToProps = function (state) {
 
    return {
        personal: state.datagrid.response
    }
}
export default connect(mapStateToProps, loginAction)(WrappedNormalLoginForm);
