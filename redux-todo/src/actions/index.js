import axios from "axios";

export const ADD_TODO = "ADD_TODO";
export const GET_USERS = "GET_USERS";

export function addTodo(todo) {
    return {type:"ADD_TODO", payload:todo}
}

export const getUsers = () => dispatch => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
        dispatch({type:"GET_USERS", payload:res.data})
    })
    .catch((err) => {
        console.error(err)
    })
}