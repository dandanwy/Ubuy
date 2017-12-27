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

class users_addComponent extends React.Component {

    componentDidMount() {
        
    }

    state = {
        userid: '',
        username: '',
        password: '',
        tel: ''

    }
    useridChange(e) {
        this.setState({ userid: e.target.value })
    }
    usernameChange(e) {
        this.setState({ username: e.target.value })
    }
    passwordChange(e) {
        this.setState({ password: e.target.value })
    }
    telChange(e) {
        this.setState({ tel: e.target.value })
    }

    usersave() {
        
        this.props.addsave({
            userid: this.state.userid, username: this.state.username, password: this.state.password, tel: this.state.tel
        })
    }
    userback() {
        hashHistory.push('/users_list');
    }
    render() {

        return (<div>
            <h2>添加用户</h2>

            <Form>
                <FormItem
                    {...formItemLayout}
                    label="userid"
                    hasFeedback
                >
                    <Input placeholder="I'm the userid" id="userid" value={this.state.userid} onChange={this.useridChange.bind(this)} />
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

                <FormItem
                    {...formItemLayout}
                    label="tel"
                    hasFeedback
                >
                    <Input placeholder="I'm the tel" id="tel" value={this.state.tel} onChange={this.telChange.bind(this)} />
                </FormItem>



                <Button.Group className="bianji"
                    style={{ marginLeft: "40%" }}>
                    <Button type="primary" onClick={this.usersave.bind(this)}>
                        <Icon type="enter" />保存
                    </Button>
                    <Button type="primary" onClick={this.userback.bind(this)}>
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

export default connect(mapToState, DatagridAction)(users_addComponent);