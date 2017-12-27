import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { cookie } from '../../utils/cookie'

import * as ChangePwdAction from '../changePwd/changePwdAction'
import $ from 'jquery'
import './changePwd.scss'
class ChangePwdComponent extends React.Component {
    render() {
        return (
            <div id="changepwd">
                <div className="changepwdHead">
                    <h3>修改密码</h3>
                </div>
            </div>
        )
    }
}
export default ChangePwdComponent;