import React from "react"
import PropTypes from 'prop-types'
import TodoItem from "./TodoItem";

const styles = {
  ul: {
    listStyleType: 'none',
    margin: 0,
    padding: 0
  }
}

function TodoList({todoList, onToggle}) {

  return (
    <ul style={styles.ul}>
      {todoList.map((todoItem, todoItemIndex) => {
        return <TodoItem
          item={todoItem}
          key={todoItem.id}
          index={todoItemIndex}
          onChange={onToggle}
        />
      })}
    </ul>
  )
}

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired
}

export default TodoList