import React from 'react';
import { Icon} from 'antd';
import {connect} from 'react-redux'
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import './helpCenter.scss'
import * as helpAction from './helpAction'


class HelpCenter extends React.Component{
    state={
        hlepType:''
    }
    render(){
        return(
            <div id="helpCenter_cts">
                <div className="header">
                    <h3><Link to="/helpcenter"><Icon type="left" /></Link>帮助中心</h3>
                </div>
                <div className="helpItem_cts">
                    {
                        MyComponent(this.props.Type)

                    }
                </div>
            </div>
        )
    }

    componentDidMount(){
        console.log(document.getElementById('footer_cts'))

    }
}
// 将string转为html结构
function createMarkup(obj) {
    return {__html: obj};
}
function MyComponent(obj) {
return <div dangerouslySetInnerHTML={createMarkup(obj)} />;
}

const mapToState = function(state){ 
    // console.log(state.helpReducer)  
    return {
        Type: state.helpReducer || []
    }
}

export default connect(mapToState, helpAction)(HelpCenter);


