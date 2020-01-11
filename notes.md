## 1 SETUP index.js
    1. install `redux` and `react-redux`
    2. import `createStore` from `redux`
    3. import `Provider` from `react-redux`
    4. import reducer form reducer folder
    5. create folders for actions and reducers

    6. create our redux store using createStore
        `const store = createStore(reducer)`

    7. wrap our app with Provider component
    8. pass in store into Provider as props

## 2 SETUP REDUCERS
    1. create index.js in reducer folder
    2. initialize initial state
        ```
            const initialState = {
               todos: []
            }
        ```
    
    3. create rootReducer function
    4. export rootReducer



## 3 SETUP ACTIONS
    1. defined action types
        `export const ADD_TODO = "ADD_TODO";`

    2. create action creator function
        a. returns action with type and payload

## 4 SETUP COMPONENT WHERE WE WANT TO USE REDUX
    1. import `connect` function fron `react-redux`
        ``
    2. import action creator function
        ```import { connect } from 'react-redux';
        import { addTodo } from './actions'```
    3. create mapStateToProps function
```
const mapStateToProps = (state) => {
  return {todos: state.todos}
}

```

4. utilize connect function
    `export default connect(mapStateToProps, { addTodo })(App);`


    