import React from 'react';
import Style from './TodoInput.module.css'

const TodoInput = ({ input, setInput, createTodo }) => {
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    createTodo();
  };

  return (
    <form className={Style.form} onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter a todo"
        className={Style.input}
      />
      <button type="submit" className={Style.btn}>Add Todo</button>
    </form>
  );

};

export default TodoInput;
