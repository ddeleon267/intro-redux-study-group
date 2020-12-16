import { createStore } from 'redux'

const todos = [{ id: 1, title: "Buy groceries", completed: true }, { id: 2, title: "Clean the house", completed: false }, { id: 3, title: "Make dinner", completed: false }, { id: 4, title: "Feed kitties", completed: true }]


function todosReducer(state = todos, action){

    switch (action.type) {
        case "TOGGLE_TODO":
            const newState = state.map(todo => {
                if (todo.id == action.payload){
                    return {...todo, completed: !todo.completed}
                } else {
                    return todo
                }
            })
            return newState
        default:
            return state 
    }
}

let store = createStore(todosReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store