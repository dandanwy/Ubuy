import React from 'react'
import DataGrid from '../datagrid/DatagridComponent'

export default class ProductsComponent extends React.Component {
    render() {
        return (<div>
            <h2>管理员页</h2>
            <DataGrid url="admins.php"></DataGrid>
        </div>
        )

    }
}