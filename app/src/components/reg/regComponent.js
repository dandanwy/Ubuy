import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { Input, Icon, Button, Switch, message, Spin} from 'antd'
import {cookie} from '../../utils/cookie'
import "./reg.scss"

import * as RegActions from '../reg/regAction'
import { duration } from 'moment';
class RegComponent extends React.Component{
    constructor(props) {
        super(props);

    }
    // 回到login
    backLogin() {
        hashHistory.push('login')
    }
    // 进入首页
    goIndex() {
        hashHistory.push('/')
    }
    // changName() {
    //     // console.log('regName')
    //     var userValue = this.refs.regUser.refs.input.value;
    //     console.log(userValue)
    //     if(userValue ===''){
    //         alert('用户名不能为空')
    //         return false;
    //     }
    // }

    // changePsd() {
    //     var pwdValue = this.refs.regPsd.refs.input.value;
    //     console.log(pwdValue)
    //     var pwdReg = /^[a-z0-9_-]{6,12}$/i;
    //     if (!pwdReg.test(pwdValue)){
    //         alert('密码必须是 6-12 位数字字母组成!')
    //         return false;
    //     }
    // }

    // rePwd() {
    //     var rePwdValue = this.refs.regRepsd.refs.input.value;
    //     if (rePwdValue != this.refs.regPsd.refs.input.value){
    //         alert('两次输入密码不一致!');
    //         return false;
    //     }
    // }

    // changeTel() {
    //     var telValue = this.refs.regTel.refs.input.value;
    //     var telReg = /^1[34578]\d{9}$/;
    //     if (!telReg.test(telValue)){
    //         alert('手机号码格式有误!')
    //         return false;
    //     }
    // }
    
    toRegister() {
        // 密码
        var pwdReg = /^[a-z0-9_-]{6,12}$/i;
        // 手机号码
        var telReg = /^1[34578]\d{9}$/;
        var userValue = this.refs.regUser.refs.input.value;
        var pwdValue = this.refs.regPsd.refs.input.value;
        var rePwdValue = this.refs.regRepsd.refs.input.value;
        var telValue = this.refs.regTel.refs.input.value;
        if (userValue === ''){
            message.error(
                '用户名不能为空!',2
            )
            return;
        } else if (!pwdReg.test(pwdValue)){
            message.error(
                '密码必须是 6-12 位数字字母组成!', 2
            )
            return;
        } else if (rePwdValue != pwdValue){
            message.error(
                '输入密码不一致!', 2
            )
            return;
        } else if (!telReg.test(telValue)) {
            message.error(
                '手机号码格式有误!', 2
            )
            return;
        }
        var obj = {
            username: this.refs.regUser.refs.input.value,
            password: this.refs.regPsd.refs.input.value,
            tel: this.refs.regTel.refs.input.value
        }
        // console.log(obj)
        if(obj){
            this.props.getData('reg.php',obj)
            console.log(obj)
            // cookie.set({
            //     name: 'userId',
            //     val: obj.tel
            // })
        }
        // this.props.regFuc(obj);     
    }
    

    componentWillReceiveProps(nextProps) {
        // qq
        var status='';
        console.log(nextProps)
        if (nextProps.dataset!=='undefine'){
            if(nextProps.dataset.length>0){
                status = nextProps.dataset[0].qq;
            console.log('STATUS',status)
            
            if(status==='ok') {
                message.success(
                    '注册成功!', 2
                )
                console.log(nextProps.dataset)            
                // cookie.set({
                //     name: 'userId',
                //     val:obj
                // })
                // ReactDOM.render(
                //     <div className="example">
                //         <Spin />
                //     </div>, 
                // document.querySelector('#app'));
                setTimeout(() => {
                    hashHistory.push('login')
                }, 2000);
            }
            
            } else if (status === 'fail'){
                message.error(
                    '帐号已存在',2
                )
            }
        }
        // var status = status.qq;
        // console.log(this.props)
       
    }
    componentWillUnmount() {
        // <div className="example">
        //     <Spin />
        // </div>
    }
    render() {
        return(
            <div id="reg_z">
                <div className="reg_z_head">
                    <Icon type="left" className="icon_left" onClick={this.backLogin.bind(this)}/>
                    <h2>用户注册</h2>
                    <Icon type="right" 
                        className="icon_right" onClick={this.goIndex.bind(this)}/>
                </div>
                <div className="reg_z_main">
                    <div className="reg_user">
                        <Input type="text" name="username" placeholder="请输入您的用户名" ref="regUser"/>
                    </div>
                    <div className="reg_psd">
                        <Input type="password" name="password" placeholder="请输入您的密码" ref="regPsd"/>
                    </div>
                    <div className="reg_repsd">
                        <Input type="password" placeholder="请再次确认您的密码" ref="regRepsd"/>
                    </div>
                    <div className="reg_tel">
                        <Icon type=""/>
                        <Input type="text" name="tel" placeholder="请确认您的联系电话" ref="regTel" />
                    </div>
                    <div className="read">
                        <Switch className="read_file" />我已阅读并同意协议
                    </div>
                    <div className="register">
                        <Button type="danger" ref="register" onClick={this.toRegister.bind(this)}>立即注册</Button>
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

const mapToState = function(state){
    console.log(state.reg.response);
    return {
        type: state.reg.type,
        dataset: state.reg.response || []
    }
}


export default connect(mapToState, RegActions)(RegComponent);