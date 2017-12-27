import React from 'react';
import {Router, Route, Link, hashHistory, IndexRoute, IndexRedirect} from 'react-router';
import HomeComponent from '../components/home/HomeComponent';
import LoginComponent from '../components/login/LoginComponent';
import GoodsComponent from '../components/goods_list/goods_list';
import GoodsaddComponent from '../components/goods_list/goods_add';
import GoodseditComponent from '../components/goods_list/goods_edit';
import userComponent from '../components/user/users_list';
import usereditComponent from '../components/user/users_edit';
import useraddComponent from '../components/user/users_add';
import adminComponent from '../components/admin/admins_list';
import adminaddComponent from '../components/admin/admin_add';
import admineditComponent from '../components/admin/admin_edit';
import orderComponent from '../components/order_list/orders_list';
import ordereditComponent from '../components/order_list/orders_edit';
import orderaddComponent from '../components/order_list/orders_add';
export default (
        <Route>
                <Route path="/" components={HomeComponent}>
                        <IndexRedirect to="/goods_list" />
                        <Route path="goods_list" component={GoodsComponent}></Route>
                        <Route path="goods_add" component={GoodsaddComponent}></Route>
                        <Route path="goods_edit" component={GoodseditComponent}></Route>
                        <Route path="users_list" component={userComponent}></Route>
                        <Route path="users_edit" component={usereditComponent}></Route>
                        <Route path="users_add" component={useraddComponent}></Route>
                        <Route path="admins_list" component={adminComponent}></Route>
                        <Route path="admins_add" component={adminaddComponent}></Route>
                        <Route path="admins_edit" component={admineditComponent}></Route>
                        <Route path="orders_list" component={orderComponent}></Route>
                        <Route path="orders_edit" component={ordereditComponent}></Route>
                        <Route path="orders_add" component={orderaddComponent}></Route>
                </Route>
                <Route path="login" component={LoginComponent}></Route>
        </Route>
)