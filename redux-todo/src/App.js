import React, { useState, useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addTodo, getUsers } from './actions'

function App(props) {
  const [input, setInput] = useState("")
  
  const handleChanges = (e) => {
    setInput(e.target.value)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    props.addTodo(input)
    setInput("")
  }

  useEffect(() => {
    props.getUsers()
  }, [])

  return (
    <div className="App">
      {/* {props.todos.map((todo, index) => <p key={index}>{todo}</p>)} */}
      {props.users.map(user => {
        return (
          <h1>{user.name}</h1>
        )
      })}
      <form onSubmit={handleSubmit}>
        <input placeholder="Add Todo" type="text" value={input} onChange={handleChanges}/>
        <button>Add Todo</button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state)
  return {todos: state.todos, users: state.users}
}

export default connect(mapStateToProps, { addTodo, getUsers })(App);