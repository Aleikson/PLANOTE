import React from 'react';
import { FaRegTrashAlt, FaArrowRight } from 'react-icons/fa';
import Style from './TodoList.module.css';

const TodoList = ({ todos, deleteTodo, moveToInProgress }) => {
  return (
    <div className={Style.contentList}>
      <h2 className={Style.title}>Tasks:</h2>
      <ul className={Style.list}>
        {todos.map((todo) => (
          <li key={todo.id} className={Style.item}>
            <button onClick={() => moveToInProgress(todo)}>
              <FaArrowRight />
            </button>
            {todo.text}
            <button className={Style.btn} onClick={() => deleteTodo(todo.id)}>
              <FaRegTrashAlt />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
