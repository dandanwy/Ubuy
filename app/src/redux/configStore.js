import {createStore, applyMiddleware} from 'redux';
import homeReducer from '../components/home/homeReducer';
import regReducer from '../components/reg/regReducer';
import loginReducer from '../components/login/loginReducer'
import orderReducer from '../components/order/orderReducer';
import rootReducer from './rootReducer';
import {ajaxMiddleware} from './ajaxMiddleware'

export default function configStore(){
    let middleware = applyMiddleware(ajaxMiddleware)
    const store = createStore(rootReducer, middleware);
    return store;
}