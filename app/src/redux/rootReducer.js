import {combineReducers} from 'redux';
import home from '../components/home/homeReducer'
import car from '../components/car_wy/carReducer'
import classify from '../components/classify_wy/classifyReducer'
import goodslist from '../components/goodList/goodsListReducer'

import order from '../components/order_wy/orderReducer'
import login from '../components/login/loginReducer'
import reg from '../components/reg/regReducer'
import order_list from '../components/order/orderReducer'
import orderlist from '../components/order/orderReducer'
import detail from '../components/detail/detailReducer'
import collect from '../components/collect/collectReducer'
import feedBackReducer from '../components/feedBack/feedBackReducer'
import helpReducer from '../components/helpCenter/helpReducer'
// import account from '../components/accountManage/accountManageReducer'
import logisticsRequested from "../components/logistics/logisticsReducer"
import Assess from "../components/assess/assessAction"
import managerOrderRequested from "../components/manager/managerOrderReducer"
import search from '../components/search/searchReducer'

export default combineReducers({
    home,
    collect,
    feedBackReducer,
    helpReducer,
    classify,
    goodslist,
    home,
    logisticsRequested,
    managerOrderRequested,
    // detail,
    reg,
    login,
    // account,
    order_list,
    detail,
    reg,
    orderlist,
    login,
    // account,
    car,
    search,
    order
})
