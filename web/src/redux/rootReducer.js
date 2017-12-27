import {combineReducers} from 'redux';

import Home from '../components/Home/HomeReducer';
import login from '../components/login/LoginReducer';
import datagrid from '../components/datagrid/DatagridReducer';


export default combineReducers({
    Home,
    login,
    datagrid
})