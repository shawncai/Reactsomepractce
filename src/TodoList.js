import React, { Component } from 'react';
import store from './store'
import { getInputChangeAction, getAddItemAction, getDeleteitemAction } from './store/actionCreators'
import TodoListUI from './TodoListUI'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.handleInputchange = this.handleInputchange.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.handleBtnclick = this.handleBtnclick.bind(this)
        this.handledelete = this.handledelete.bind(this)
        store.subscribe(this.handleStoreChange)
    }
    render() {
        return <TodoListUI
                 inputValue={this.state.inputValue}
                 list={this.state.list}
                 handleInputchange={this.handleInputchange}
                 handleBtnclick={this.handleBtnclick}
                 handledelete={this.handledelete}
                 />
    }

    handledelete(e) {
        const action = getDeleteitemAction(e)
        store.dispatch(action)
    }

    handleBtnclick() {
        const action = getAddItemAction()
        store.dispatch(action)
    }

    handleInputchange(e) {
        e.persist()
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action)
    }

    handleStoreChange() {
        this.setState(store.getState())
    }
}

export default TodoList