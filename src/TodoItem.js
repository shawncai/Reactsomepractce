import React, { Component } from 'react';
import PropTypes from 'prop-types'

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleclick = this.handleclick.bind(this)
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.content !== this.props.content) {
            return true
        } else {
            return false
        }
    }

    render() {
        const { content, test } = this.props
        return (<div
            onClick={this.handleclick}>
            {test} - {content}
        </div>)
    }

    handleclick() {
        const { deleteItem, index } = this.props
        deleteItem(index)
    }
}

TodoItem.propTypes = {
    test: PropTypes.string.isRequired,
    content: PropTypes.string,
    deleteItem: PropTypes.func,
    index: PropTypes.number
}

TodoItem.defaultProps = {
    test: 'hello wold'
}

export default TodoItem