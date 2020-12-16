import React, { Component } from 'react'
import Item from './Item'
import { connect } from 'react-redux'

export class IncompleteTodos extends Component {

    render() {
        console.log(this.props)
        const itemList = this.props.todos.map(item => {
            return <Item key={item.id} id={item.id} title={item.title} completed={item.completed} dispatch={this.props.dispatch}/>
        })
        return (
            <div>
                <h3>Incomplete Todos:</h3>
                {itemList}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state.filter(todo => !todo.completed)
    }
}


export default connect(mapStateToProps)(IncompleteTodos)
