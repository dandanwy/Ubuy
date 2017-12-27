import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Link, hashHistory, IndexRoute, IndexRedirect} from 'react-router'
import * as DatagridAction from './DatagridAction';
import { Table, Input, Popconfirm, Icon, Pagination} from 'antd';
import './Datagrid.scss'
import columnsFiled from './config';



const Search = Input.Search;

class DatagridComponent extends React.Component{
    componentDidMount() {
        this.props.Init(this.props.url, { page: 1})
        
        
    }
    
    state = {
        current: 1,
    }

    onpageChange = (page) => {
        
        this.setState({
            current: page,
        });
        this.props.Init(this.props.url, { page: (10*(page-1)+1) })
    }

    getKeys(item) {
        var newObj = item ? Object.keys(item) : []
        return newObj
    }

    edit(e){
        var id = e.target.parentNode.parentNode.children[0].innerHTML

        var uid = this.props.url.slice(0, -4);

        if(uid == 'goods'){
            this.props.search({ goodid: id });

        } else if(uid == 'users'){
            this.props.search({ userid: id });
        } else if(uid == 'admins'){
            this.props.search({ admin_id: id });
        } else if(uid == 'orders'){
            this.props.search({ order_id: id });
        }
        
        var url = this.props.url.slice(0, -4);
        setTimeout(function () {
            hashHistory.push('/' + url + '_edit');
        }, 50);

       
    }

    search(value){

        var uid = this.props.url.slice(0, -4);
        if (uid == 'goods'){
            this.props.search({ goodid: value,brandname:value });
        } else if (uid == 'users'){
            this.props.search({userid:value, username:value})
        } else if(uid == 'admins'){
            this.props.search({ admin_id: value, username:value})
        } else if(uid == 'orders'){
            this.props.search({ order_id: value, order_user:value })
        }
        
    }

    del(e){

        var id = e.target.parentNode.parentNode.children[0].innerHTML

        var uid = this.props.url.slice(0, -4);
        if (uid == 'goods') {
            this.props.del({ goodid: id })
            this.props.Init(this.props.url)

        } else if (uid == 'users') {
            this.props.del({ usersid: id })
            this.props.Init('users.php')
        } else if (uid == 'admins'){
            this.props.del({ admin_id: id })
            this.props.Init('admins.php')
        } else if (uid == 'orders'){
            this.props.del({ order_id: id })
            this.props.Init('orders.php')
        }
    }

   
    render() {
        if (!this.props.dataset) {
            return null
        } 

        return (
            <div>
                <div className="listHeader">
                    <Search
                        placeholder="input search text"
                        onSearch={value => this.search(value)}
                        style={{ width: 250 }}
                    />
                </div>
                <table className="goodslist">
                    <thead>
                        <tr>
                            {
                                this.getKeys(this.props.dataset.data1[0]).map(function (key, index) {
                                    return <th key={index}>{key}</th>
                                })
                            }
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.dataset.data1.map(function (obj, index) {
                                return (
                                    <tr key={'tr' + index}>
                                        {
                                            this.getKeys(obj).map(function (key, idx) {
                                                if (typeof obj[key] != 'object') {
                                                    return <td key={'b' + idx}>{obj[key]}</td>
                                                }
                                                return <td key={'a' + idx}>object</td>
                                                
                                            })
                                            
                                        }
                                        <td className="operation"><Icon type="edit" className="edit"  onClick={this.edit.bind(this)}/>
                                            <Icon type="delete" className="del" onClick={this.del.bind(this)}/></td>
                                    </tr>
                                )
                            }.bind(this))
                        }
                    </tbody>
                    <tfoot></tfoot>
                </table>
    
                <Pagination current={this.state.current} onChange={this.onpageChange} total={Number(this.props.dataset.data2[0].rowsCount)} style={{ float: "right" }}/>
                
            </div>
        )
    }
}

const mapToState = function(state){
    
    return{
        dataset: state.datagrid.response
    }
}

export default connect(mapToState,DatagridAction)(DatagridComponent);