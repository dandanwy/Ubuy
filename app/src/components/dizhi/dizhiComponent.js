import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { cookie } from '../../utils/cookie'

import * as DizhiAction from '../dizhi/dizhiAction'
import $ from 'jquery'

class DizhiComponent extends React.Component{
    render() {
        return(
            <div>dizhi</div>
        )
    }
}
export default DizhiComponent;