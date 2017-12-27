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

class admins_addComponent extends React.Component {

    state = {
        admin_id: '',
        username: '',
        password: ''

    }
    admin_idChange(e) {
        this.setState({ admin_id: e.target.value })
    }
    usernameChange(e) {
        this.setState({ username: e.target.value })
    }
    passwordChange(e) {
        this.setState({ password: e.target.value })
    }
    
    adminsave() {
        
        this.props.addsave({
            admin_id: this.state.admin_id, username: this.state.username, password: this.state.password
        })
    }
    adminback() {
        hashHistory.push('/admins_list');
    }
    render() {

        return (<div>
            <h2>添加管理员</h2>

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
                    label="username"
                    hasFeedback
                >
                    <Input placeholder="I'm the username" id="username" value={this.state.username} onChange={this.usernameChange.bind(this)} />
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="password"
                    hasFeedback
                >
                    <Input placeholder="I'm the password" id="password" value={this.state.password} onChange={this.passwordChange.bind(this)} />
                </FormItem>

                <Button.Group className="bianji"
                    style={{ marginLeft: "40%" }}>
                    <Button type="primary" onClick={this.adminsave.bind(this)}>
                        <Icon type="enter" />保存
                    </Button>
                    <Button type="primary" onClick={this.adminback.bind(this)}>
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

export default connect(mapToState, DatagridAction)(admins_addComponent);