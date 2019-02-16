import React from 'react';
import './index.css';

const TodoItem = (props) => {
  const { todo, index } = props;
  return (
    <li>
      <input onChange={(event) => props.toggleTodoDone(event, index)} type="checkbox" className="form-check-input" checked={todo.done} />
      {/* <span style={{
        textDecoration: todo.done ? 'line-through' : 'inherit'
      }}>{todo.title}</span> */}
      <span className={todo.done ? 'done' : ''}>{todo.title}</span>
      <button className="btn btn-block btn-outline-danger" onClick={() => props.removeTodo(index)}>Remove</button>
    </li>
  );
};

export default TodoItem;
