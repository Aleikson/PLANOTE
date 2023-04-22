import React from 'react';
import styles from "./GlobalTodo.module.css";
import { AiOutlinePlus } from 'react-icons/ai';

export const AddTodo = ({ createTodo, input, setInput }) => {
  return (
    <div className={styles.container}>
      <form onSubmit={createTodo} className={styles.form}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={styles.input}
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