import React, { Component } from 'react'
import Item from './Item'
import Child from './Child'

class List extends Component {
    render() {
        // const itemList = this.props.todos.map(item => {
        //     return <Item key={item.id} id={item.id} title={item.title} completed={item.completed} />
        // })
        return (
            <div>
                <Child />
            </div>
        )
    }
}

export default List
