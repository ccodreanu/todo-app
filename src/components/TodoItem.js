import React from "react"

class TodoItem extends React.Component {
  render() {
    const { completed, id, title } = this.props.todo
    return (
      <li className="todo-item">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => this.props.handleChangeProps(id)}
        />
        <span className={completed ? "completed-todo-item" : null}>
          {title}
        </span>
        <button onClick={() => this.props.deleteTodoProps(id)}>
          Delete
        </button>
      </li>
    )
  }
}

export default TodoItem
