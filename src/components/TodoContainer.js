import React from "react"

import Header from "./Header"
import TodosList from "./TodosList"

class TodoContainer extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "First item",
        completed: true
      },
      {
        id: 2,
        title: "Second item",
        completed: false
      }
    ]
  }
  render() {
    return (
      <div>
        <Header />
        <TodosList todos={this.state.todos} />
      </div>
    )
  }
}

export default TodoContainer
