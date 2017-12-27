import React from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import homeComponent from '../components/home/homeComponent'
// import carComponent from '../components/car_wy/carComponent'
import classifyComponent from '../components/classify_wy/classifyComponent'
import orderComponent from '../components/order_wy/orderComponent'
// import classifyComponent from '../components/classify_wy/classifyComponent'

import MyPage from '../components/myPage/myPageComponent'
import ViewHistoryComponent from '../components/viewhistory/viewhistoryComponent'
import collect from '../components/collect/collectComponent'
import HelpCenter from '../components/helpCenter/helpCenterComponent';
import FeedBack from '../components/feedBack/feedBackComponent'
import goodslistComponent from "../components/goodList/goodsListComponent"
import LoginComponent from '../components/login/loginComponent'
import RegComponent from '../components/reg/regComponent'
import OrderComponent from '../components/order/orderComponent'
import SpinnerComponent from '../components/spinner/SpinnerComponent'
import HelpItem from "../components/helpCenter/helpitem"
import Server from "../components/service/ServiceComponent"
import Chat from "../components/service/chat"
import ManagerOrder from "../components/manager/manager_order"
import LogisticsComponent from "../components/logistics/logisticsComponent"
import AssessComponent from "../components/assess/assessComponent"
import detailComponent from "../components/detail/detailComponent"
import carComponent from '../components/car_wy/carComponent'
// import orderComponent from '../components/order_wy/orderComponent'
import ciaComponent from "../components/cia/ciaComponent"
import searchComponent from "../components/search/searchComponent"

export default (
        <div>
            <Route path="/" component={homeComponent}>                
            </Route>
            <Route path="/car" component={carComponent}>
            </Route>
            <Route path="/car/order" component={orderComponent}>
            </Route>
            
            <Route path="/car/order" component={orderComponent}/>
            <Route path="/car" component={carComponent}></Route>
            <Route path="/classify" component={classifyComponent}></Route>
            <Route path="/mypage" component={MyPage}></Route>
            <Route path="/collect" component={collect}></Route>
            <Route path="/viewhistory" component={ViewHistoryComponent}></Route>
            <Route path="/helpcenter" component={HelpCenter}>
            </Route>
            <Route path="/helpitem" component={HelpItem}></Route>
            <Route path="/feedfack" component={FeedBack}></Route>
            <Route path="/goodslist/:brandname" component={goodslistComponent}></Route>
            <Route path="/goodslist" component={goodslistComponent}></Route>
            <Route path="/login" component={LoginComponent}></Route>
            <Route path="/reg" component={RegComponent}></Route>
            <Route path="/order(/:key)" component={OrderComponent}></Route>
            <Route path="/orderlist" component={OrderComponent}></Route>
            <Route path="/spinner" component={SpinnerComponent}></Route>                   
            <Route path="server" component={Server}>
            </Route>
            <Route path="chat" component={Chat}></Route>
            <Route path="detail/:goodid" component={detailComponent}>
            </Route>
            <Route path="managerorder" component={ManagerOrder}>
            </Route>
            <Route path="logistics" component={LogisticsComponent}>
            </Route>
            <Route path="assess" component={AssessComponent}>
            </Route>
            <Route path="search" component={searchComponent}>
            </Route>
            <Route path="cia" component={ciaComponent}>
            </Route>
           
        </div>
)