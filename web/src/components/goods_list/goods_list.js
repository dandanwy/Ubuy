import React from 'react'
import DataGrid from '../datagrid/DatagridComponent'

export default class ProductsComponent extends React.Component {
    render() {
        return (<div>
            <h2>列表页</h2>
            <DataGrid url="goods.php"></DataGrid>
            </div>
    )

    }
}