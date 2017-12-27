import React from 'react'
import DataGrid from '../datagrid/DatagridComponent'

export default class ProductsComponent extends React.Component {
    render() {
        return (<div>
            <h2>订单页</h2>
            <DataGrid url="orders.php"></DataGrid>
        </div>
        )

    }
}