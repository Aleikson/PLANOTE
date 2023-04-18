import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import './Todo.module.css';

const Todo = ({ todo, toggleComplete, deleteTodo }) => {
  const liComplete = todo.completed ? 'liComplete' : 'li';
  const textComplete = todo.completed ? 'textComplete' : 'text';

  return (
    <li className={liComplete}>
      <div className='row'>
        <input
          onChange={() => toggleComplete(todo)}
          type='checkbox'
          checked={todo.completed ? 'checked' : ''}
        />
        <p onClick={() => toggleComplete(todo)} className={textComplete}>
          {todo.text}
        </p>
      </div>
      <button onClick={() => deleteTodo(todo.id)}>
        {<FaRegTrashAlt />}
      </button>
    </li>
  );
};

export default Todo;