import React from 'react'
import { connect } from 'react-redux'


const Header = (props) => {
    return (
        <header>
            Completed Todos: {props.todosNum}
        </header>
    )
}

const mapStateToProps = state => {
    return {
        todosNum: state.filter(todo => todo.completed).length
    }
}

export default connect(mapStateToProps)(Header)
