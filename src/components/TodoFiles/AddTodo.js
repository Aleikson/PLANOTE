import React from 'react';
import styles from "./GlobalTodo.module.css";
import { AiOutlinePlus } from 'react-icons/ai';

export const AddTodo = ({ createTodo, input, setInput }) => {
  return (
    <div className={styles.container}>
      <h2>Add Todo</h2>
      <form onSubmit={createTodo} className={styles.form}>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type='text'
          placeholder='Add Todo'
        />
        <button className={styles.button}>
          <AiOutlinePlus size={30} />
        </button>
      </form>
    </div>
  );
};