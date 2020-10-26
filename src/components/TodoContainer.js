import React from "react"
import { v4 as uuidv4 } from "uuid"

import Header from "./Header"
import InputTodo from "./InputTodo"
import TodosList from "./TodosList"

class TodoContainer extends React.Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: "First Todo",
        completed: true
      },
    ]
  }

  handleChange = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    })
  }

  deleteTodo = id => {
    this.setState({
      todos: [
        ...this.state.todos.filter(todo => {
          return todo.id !== id;
        })
      ]
    })
  }

  addTodo = title => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    }

    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  render() {
    return (
      <div>
        <Header />
        <InputTodo addTodoProps={this.addTodo} />
        <TodosList
          todos={this.state.todos}
          handleChangeProps={this.handleChange}
          deleteTodoProps={this.deleteTodo}
        />
      </div>
    )
  }
}

export default TodoContainer
