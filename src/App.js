import React, { Component, Fragment } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './appstyle.css'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
        this.handAddItem = this.handAddItem.bind(this)
    }

    render() {
        return (
            <Fragment>
                <TransitionGroup
                >
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <CSSTransition
                                    timeout={1000}
                                    classNames='fade'
                                    unmountOnExit
                                    onEntered={(el) => { el.style.color = 'blue' }}
                                    appear={true}
                                    key={index}
                                >
                                    <div >{item}</div>
                                </CSSTransition>
                            )
                        })
                    }
                </TransitionGroup>


                <button onClick={this.handAddItem}>toggle</button></Fragment>

        )
    }

    handAddItem() {
        this.setState((prevState) => {
            return {
                list: [...prevState.list, 'item']
            }
        })
    }
}

export default App