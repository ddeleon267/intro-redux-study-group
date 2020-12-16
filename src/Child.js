import React, { Component } from 'react'
import Grandchild from './Grandchild'
import { connect } from 'react-redux'


export class Child extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <p>First Task: {this.props.firstTask.title}</p>
                <Grandchild />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        firstTask: state[0]
    }
}

export default connect(mapStateToProps)(Child)
