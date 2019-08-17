import React from 'react'
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';

const TodoListUI = (props) => {
    return (
        <div>
            <div style={{ margin: '20px' }}>
                <Input
                    value={props.inputValue}
                    placeholder="to dolist"
                    style={{ width: '300px' }}
                    onChange={props.handleInputchange}
                />
                <Button type="primary" style={{ marginLeft: '20px' }}
                    onClick={props.handleBtnclick}
                >提交</Button>
            </div>
            <List
                style={{ width: '300px', margin: '20px' }}
                size="small"
                bordered
                dataSource={props.list}
                renderItem={(item, index) => <List.Item
                    onClick={(index) => { props.handledelete(index) }}
                >{item}</List.Item>}
            />
        </div>
    )
}

// class TodoListUI extends Component {
//     render() {
//         return (
//             <div>
//             <div style={{ margin: '20px' }}>
//                 <Input
//                     value={this.props.inputValue}
//                     placeholder="to dolist"
//                     style={{ width: '300px' }}
//                     onChange={this.props.handleInputchange}
//                 />
//                 <Button type="primary" style={{ marginLeft: '20px' }}
//                     onClick={this.props.handleBtnclick}
//                 >提交</Button>
//             </div>
//             <List
//                 style={{ width: '300px', margin: '20px' }}
//                 size="small"
//                 bordered
//                 dataSource={this.props.list}
//                 renderItem={(item, index) => <List.Item
//                     onClick={(index) => {this.props.handledelete(index)}}
//                 >{item}</List.Item>}
//             />
//         </div>
//         )
//     }
//  }

export default TodoListUI