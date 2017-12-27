import React from 'react';
import { Icon,Tabs,Rate,Checkbox } from 'antd';
import {connect} from 'react-redux'
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import * as  AssessAction from "./assessAction"
import './assess.scss'
import { Button } from 'antd/lib/radio';

class AssessComponent extends React.Component{
    state={
        start_val:"",
        niming:"您的评价能帮助其他小伙伴哟"
    }
    render(){
        return(
            <div id="helpCenter_cts">
                <div className="header">
                    <h3><Link to="/mypage"><Icon type="left" /></Link>发表评价</h3>
                </div>
                <div className="collect_footer">
                    <div className="start">
                        <i>图</i> <div className="xingxing">描述相符：<Rate onChange={this.start.bind(this)}/>{this.state.start_val}</div>
                    </div>
                    <div className="word">
                        <textarea placeholder="宝贝满足您的期待吗？说说它的优点和美中不足的地方吧"></textarea>
                        <div className="niming">
                            <Checkbox onChange={this.onChange.bind(this)}>匿名</Checkbox> <span className="nm">{this.state.niming}</span>
                        </div>
                    </div>
                    <button className="sendBtn">发表评论</button>
                </div>
            </div>
        )
    }
    start(value){
        console.log(value)
        var start_lev = "";
        if( value == 1 ){
            start_lev = "非常差";
        }
        if( value == 2 ){
            start_lev = "差";
        }
        if( value == 3 ){
            start_lev = "一般";
        }
        if( value == 4 ){
            start_lev = "好";
        }
        if( value == 5 ){
            start_lev = "非常好";
        }
        this.setState({start_val:start_lev})
    }
    onChange(e) {
        if(e.target.checked){
            this.setState({niming:"您写的评价会以匿名的形式展现"})
        }else{
            this.setState({niming:"您的评价能帮助其他小伙伴哟"})
        }
        console.log(`checked = ${e.target.checked}`);
    }
}


const mapToState = function(state){ 
    return {
        // Type: state.helpReducer || []
    }
}

export default connect(mapToState, AssessAction)(AssessComponent);

