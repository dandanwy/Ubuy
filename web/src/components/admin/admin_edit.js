import React from 'react'
import ReactDOM from 'react-dom';
import DataGrid from '../datagrid/DatagridComponent'
import { connect } from 'react-redux';
import { Router, Route, Link, hashHistory, IndexRoute, IndexRedirect } from 'react-router'
import * as DatagridAction from '../datagrid/DatagridAction';
import { Form, Input, DatePicker, Col, TimePicker, Select, Cascader, InputNumber, Button, Icon, Value } from 'antd';

let dataset;
const FormItem = Form.Item;
const Option = Select.Option;
const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
    },
};

const CustomizedForm = Form.create({
    onFieldsChange(props, changedFields) {
        props.onChange(changedFields);
    },
    mapPropsToFields(props) {
        return {
            username: Form.createFormField({
                ...props.username,
                value: props.username.value,
            }),
        };
    },
    onValuesChange(_, values) {
        
    },
})((props) => {
    const { getFieldDecorator } = props.form;
    return (
        <Form layout="inline">
            <FormItem label="Username">
                {getFieldDecorator('username', {
                    rules: [{ required: true, message: 'Username is required!' }],
                })(<Input />)}
            </FormItem>
        </Form>
    );
});

class admins_editComponent extends React.Component {

    componentDidMount() {
        
    }

    state = {
        admin_id: this.props.dataset.data1[0].admin_id,
        admin_user: this.props.dataset.data1[0].username,
        admin_psw: this.props.dataset.data1[0].password,

    }
    admin_idChange(e) {
        this.setState({ userid: e.target.value })
    }
    admin_userChange(e) {
        this.setState({ admin_user: e.target.value })
    }
    admin_pswChange(e) {
        this.setState({ admin_psw: e.target.value })
    }

    admin_editsave() {
        
        this.props.edit({
            admin_id: this.state.admin_id, admin_user: this.state.admin_user, admin_psw: this.state.admin_psw
        })
    }
    admin_editback() {
        hashHistory.push('/admins_list');
    }
    render() {

        return (<div>
            <h2>管理员编辑</h2>

            <Form>
                <FormItem
                    {...formItemLayout}
                    label="admin_id"
                    hasFeedback
                >
                    <Input placeholder="I'm the admin_id" id="admin_id" value={this.state.admin_id} onChange={this.admin_idChange.bind(this)} />
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="admin_user"
                    hasFeedback
                >
                    <Input placeholder="I'm the admin_user" id="admin_user" value={this.state.admin_user} onChange={this.admin_userChange.bind(this)} />
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="admin_psw"
                    hasFeedback
                >
                    <Input placeholder="I'm the admin_psw" id="admin_psw" value={this.state.admin_psw} onChange={this.admin_pswChange.bind(this)} />
                </FormItem>

                <Button.Group className="bianji"
                    style={{ marginLeft: "40%" }}>
                    <Button type="primary" onClick={this.admin_editsave.bind(this)}>
                        <Icon type="enter" />保存
                    </Button>
                    <Button type="primary" onClick={this.admin_editback.bind(this)}>
                        返回<Icon type="rollback" />
                    </Button>
                </Button.Group>


            </Form>
        </div>
        )

    }
}

const mapToState = function (state) {
    
    return {
        dataset: state.datagrid.response
    }
}

export default connect(mapToState, DatagridAction)(admins_editComponent);