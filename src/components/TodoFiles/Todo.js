import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import styles from './Todo.module.css';

const Todo = ({ todo, toggleComplete, deleteTodo }) => {
  const liComplete = todo.completed ? `${styles.li} ${styles.liComplete}` : styles.li;
  const textComplete = todo.completed ? `${styles.text} ${styles.textComplete}` : styles.text;

  return (
    <li className={liComplete}>
      <div className={styles.row}>
        <input
          onChange={() => toggleComplete(todo)}
          type='checkbox'
          checked={todo.completed ? 'checked' : ''}
        />
        <p onClick={() => toggleComplete(todo)} className={textComplete}>
          {todo.text}
        </p>
      </div>
      <button className={styles.btn} onClick={() => deleteTodo(todo.id)}>
        {<FaRegTrashAlt />}
      </button>
    </li>
  );
};

export default Todo;