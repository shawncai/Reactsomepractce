import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';


const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];

class TodoList extends Component {
    render() {
        return (
            <div>
                <div style={{ margin: '20px' }}>
                    <Input placeholder="to dolist" style={{ width: '300px' }} />
                    <Button type="primary" style={{ marginLeft: '20px' }}>提交</Button>
                </div>
                <List
                style={{width: '300px', margin: '20px'}}
                    size="small"
                    bordered
                    dataSource={data}
                    renderItem={item => <List.Item>{item}</List.Item>}
                />
            </div>
        )
    }
}

export default TodoList