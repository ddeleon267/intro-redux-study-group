import React, { Component } from 'react'
import Item from './Item'
import { connect } from 'react-redux'

export class Grandchild extends Component {
    
    render() {
        console.log(this.props)
        const itemList = this.props.todos.map(item => {
            return <Item key={item.id} id={item.id} title={item.title} completed={item.completed} />
        })
        return (
            <div>
                {itemList}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state
    }
}


export default connect(mapStateToProps)(Grandchild)
