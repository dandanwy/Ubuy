import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import { connect } from 'react-redux'
import { browserHistory } from 'react-router';
import { Input, Icon, Checkbox, Button, message} from 'antd'
import { duration } from 'moment';
import {cookie} from '../../utils/cookie'
import "./login.scss"
import loginImg from '../../libs/default/login.jpg'
import * as LoginActions from '../login/loginAction'

class LoginComponent extends React.Component{
    constructor(state){
        super(state);
        this.state = {
            name:''
        }
    }
    
    componentWillUpdate(nextProps,nextState) {
        // 得到name
        console.log(nextState.name)
        
        cookie.set({
            name: 'userId',
            val: nextState.name
        })
        // setTimeout(() => {
        //     hashHistory.push('/')            
        // }, 2000);
    }
    componentWillUnmount() {
        // ReactDOM.render(
        //     <div className="example">
        //         <Spin />
        //     </div>,
        // document.querySelector('#app'))
    }
    componentWillReceiveProps(nextProps) {
        var status = nextProps.dataset;
        // console.log(nextProps)
        if(status ===false){
            message.error(
                '登录失败，用户名或密码有误!',2
            )
            return;
        }else if(status===true) {
            message.success(
                '登录成功',2
            )
        }
    }
    componentDidMount() {
    }
    goReg() {
        hashHistory.push('reg')
    }
    loginIn() {
        // console.log(name)
        // 密码
        var pwdReg = /^[a-z0-9_-]{6,12}$/i;
        // 手机号码
        var telReg = /^1[34578]\d{9}$/;
        var tel = this.refs.usertel.refs.input.value;
        var password = this.refs.password.refs.input.value;
        // console.log(tel, password)
        if (tel === '' || password==='' ){
            message.error(
                '请输入完整信息!',2
            )
            return;
        } else if (!telReg.test(tel)){
            message.error(
                '手机号码格式有误!',2
            )
            return;
        } else if (!pwdReg.test(password)){
            message.error(
                '密码必须是 6-12 位数字字母组成!',2
            )
            return;
        }
        var obj = {
            tel,
            password
        }
        this.setState({
            name:obj.tel
        }) 
        console.log(obj)
        if(obj){
            this.props.getData('login.php',obj)
            // console.log(this.props.getData)
        }
        setTimeout(() => {
            hashHistory.push('/')
        }, 2000);

    }
    render (){
        return(
            <div id="login_z">
                <div className="login_z_head">
                    <h2>用户登录</h2>
                    <Icon type="right" className="icon_right" onClick={this.goReg.bind(this)}/>
                </div>
                <p>欢迎进入山寨优购</p>
                <div className="login_img">
                    <img src={loginImg} />
                </div>
                <div className="login_z_main">
                    <div className="user">
                        <Input type="text" placeholder="请输入您的手机号" ref="usertel" />
                    </div>
                    <div className="psd">
                        <Input type="password" placeholder="请输入您的密码" ref="password"/>
                    </div>
                    <Link to="/reg">忘记密码?</Link>
                    <div className="loginIn">
                        <Button type="danger" ref="log" onClick={this.loginIn.bind(this)}>立即登录</Button>
                    </div>
                </div>
                <div className="beizhu">
                    <p>CopyRight©2017 AllMobilize Inc.</p>
                    <p>京ICP备13033158</p>
                </div>
    
            </div>
        )
    }
}
const mapTopState = function(state){
    console.log(state);
    // console.log(this.props)
    // console.log(this.nextProps)
    return {
        type: state.login.type,
        dataset: state.login.response
    }
}

export default connect(mapTopState, LoginActions)(LoginComponent);
