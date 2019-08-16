import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem'
import axios from 'axios'
import './style.css'

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: '',
			list: []
		}
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleBtnClick = this.handleBtnClick.bind(this)
		this.handleDelete = this.handleDelete.bind(this)

	}
	render() {
		return (
			<Fragment>
				<div>
					<label htmlFor='insertarea'>输入内容</label>
					<input
						id='insertarea'
						className='input'
						value={this.state.inputValue}
						onChange={this.handleInputChange}
					/>
					<button onClick={this.handleBtnClick}>提交</button>
					<ul>
						{
							this.getTodoItem()
						}
					</ul>
				</div>
			</Fragment>
		)
	}
	getTodoItem() {
		return (
			this.state.list.map((item, index) => {
				return (
					<TodoItem
						key={index}
						index={index}
						content={item}
						deleteItem={this.handleDelete} />
				)


			})
		)
	}

	componentDidMount() {
		// axios.get('/api/todolist')
		// .then((res)=> {console.log(res.data)})
		// .catch(()=> {alert('error')})
	}

	handleInputChange(e) {
		const value = e.target.value
		this.setState(() => ({
			inputValue: value
		}))
	}

	handleBtnClick() {
		this.setState((prevState) => ({
			list: [...prevState.list, prevState.inputValue],
			inputValue: ''
		}))
	}

	handleDelete(index) {
		this.setState((prevState) => {
			const list = [...prevState.list]
			list.splice(index, 1)
			return {
				list
			}
		})
	}

}

export default TodoList