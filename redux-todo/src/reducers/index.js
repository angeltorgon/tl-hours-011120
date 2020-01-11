import { ADD_TODO, GET_USERS } from '../actions'

const initialState = {
    todos: [],
    users: []
}

function rootReducer(state=initialState, action) {
    console.log(action)
    switch(action.type) {
        case ADD_TODO:
            return {todos:[...state.todos, action.payload]}
        case GET_USERS:
            return {...state, users: action.payload}
        default:
            return state
    }
}

export default rootReducer;