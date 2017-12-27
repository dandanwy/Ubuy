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

class Goods_addComponent extends React.Component {

    state = {
        order_id: '',
        order_user: '',
        order_tel: '',
        order_site: '',
    }
    order_idChange(e) {
        this.setState({ order_id: e.target.value })
    }
    order_userChange(e) {
        this.setState({ order_user: e.target.value })
    }
    order_telChange(e) {
        this.setState({ order_tel: e.target.value })
    }
    order_siteChange(e) {
        this.setState({ order_site: e.target.value })
    }

    order_save() {
        
        this.props.addsave({
            order_id: this.state.order_id, order_user: this.state.order_user, order_tel: this.state.order_tel, order_site: this.state.order_site
        })
    }
    order_back() {
        hashHistory.push('/orders_list');
    }
    render() {

        return (<div>
            <h2>添加订单</h2>

            <Form>
                <FormItem
                    {...formItemLayout}
                    label="order_id"
                    hasFeedback
                >
                    <Input placeholder="I'm the order_id" id="order_id" value={this.state.order_id} onChange={this.order_idChange.bind(this)} />
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="order_user"
                    hasFeedback
                >
                    <Input placeholder="I'm the order_user" id="order_user" value={this.state.order_user} onChange={this.order_userChange.bind(this)} />
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="order_tel"
                    hasFeedback
                >
                    <Input placeholder="I'm the order_tel" id="order_tel" value={this.state.order_tel} onChange={this.order_telChange.bind(this)} />
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="order_site"
                    hasFeedback
                >
                    <Input placeholder="I'm the order_site" id="order_site" value={this.state.order_site} onChange={this.order_siteChange.bind(this)} />
                </FormItem>

                <Button.Group className="bianji"
                    style={{ marginLeft: "40%" }}>
                    <Button type="primary" onClick={this.order_save.bind(this)}>
                        <Icon type="enter" />保存
                    </Button>
                    <Button type="primary" onClick={this.order_back.bind(this)}>
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

export default connect(mapToState, DatagridAction)(Goods_addComponent);