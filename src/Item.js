import React, { Component } from 'react'

class Item extends Component {

    toggle = (event) => {
        this.props.dispatch({ type: "TOGGLE_TODO", payload: event.target.id})
    }

    render() {
        return (
            <div>
                {this.props.title}
                <input type="checkbox" id={this.props.id} onChange={this.toggle} checked={this.props.completed}/>
            </div>
        )
    }
}

export default Item
