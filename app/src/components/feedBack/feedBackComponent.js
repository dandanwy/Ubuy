import React from 'react';
import { Icon,message,Modal} from 'antd';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import {connect} from 'react-redux';
import './feedBack.scss'
import * as feedBack from './feedBackAction'

class FeeBackCenter extends React.Component{
    render(){
        return(
            <div id="feedBack_cts">
                <div className="header">
                    <h3><Link to="/mypage"><Icon type="left" /></Link>意见反馈</h3>
                </div>
                <div className="feedBack_footer">
                    <div className="feedBack_type">
                        <h4>反馈类型:<span>{this.state.type}</span></h4>
                        <ul>
                            <li onClick={this.handleClick.bind(this)}>配送服务</li>
                            <li onClick={this.handleClick.bind(this)}>软件报错</li>
                            <li onClick={this.handleClick.bind(this)}>意见反馈</li>
                            <li onClick={this.handleClick.bind(this)}>其他</li>
                        </ul>
                    </div> 
                    <div className="feedBack_words">
                        <textarea onKeyUp={this.change.bind(this)}></textarea>
                    </div>
                    <div className="username_cts">
                        <input type="text" value={this.state.name} onChange={this.onChange.bind(this)}/>
                    </div>
                    <div className="btn_cts">
                        <button onClick={this.sub.bind(this,{type:this.state.type,text:this.state.textarea,name:this.state.name})}>提交</button>
                    </div>
                </div>
            </div>
        )
    }
    state ={
        num:0,
        type:'',
        textarea:'',
        name:'张三'
    }
    // 获取反馈类型的值
    handleClick(eve){  
        this.setState({type:eve.target.innerHTML})
        eve.target.style="border: 1px solid red;color:red";
        // console.log(eve.target.innerHTML)
    }
    // 获取textarea的值
    change(eve){
        this.setState({textarea:eve.target.value})
    }
    onChange(eve){
        this.setState({name:eve.target.value})
    }
    // 提交按钮,将参数传到action里
    sub(obj){
        if(this.state.textarea == ''|| this.state.type==''){
            // message.error('请输入反馈类型');
            Modal.warning({
                title: '温馨提醒',
                content: '你还没输入内容哦！',
            });
            return
        }
        this.props.getData(obj)
        // message.info('感谢您的反馈,我们会提交给相关部门');
        // setTimeout(() => {
        //     hashHistory.push('/mypage')
        // }, 2000);
        const modal = Modal.success({
            title: '温馨提醒',
            content: '感谢您的反馈,我们会提交给相关部门',
            });
        setTimeout(() => modal.destroy(), 1000);
    }
}

const mapToState = function(state){
    // console.log(state.feedBackReducer)
    return {
        // dataset: state.collect.response || []
    }
}
export default connect(mapToState, feedBack)(FeeBackCenter)