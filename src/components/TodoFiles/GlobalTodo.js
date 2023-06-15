import React, { useState, useEffect } from 'react';
import Style from './TodoList.module.css';
import { db } from '../../firebase';
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from 'firebase/firestore';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { FaRegTrashAlt, FaArrowLeft } from 'react-icons/fa';

const GlobalTodo = () => {
  const [todos, setTodos] = useState([]);
  const [inProgressTodos, setInProgressTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [input, setInput] = useState('');

  const createTodo = async () => {
    if (input === '') {
      alert('Please enter a valid todo');
      return;
    }

    await addDoc(collection(db, 'NotesCloud'), {
      text: input,
      completed: false,
    });

    setInput('');
  };

  useEffect(() => {
    const q = query(collection(db, 'NotesCloud'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      let inProgressTodosArr = [];
      let completedTodosArr = [];
      querySnapshot.forEach((doc) => {
        const todo = { ...doc.data(), id: doc.id };
        if (todo.completed) {
          completedTodosArr.push(todo);
        } else if (todo.inProgress) {
          inProgressTodosArr.push(todo);
        } else {
          todosArr.push(todo);
        }
      });
      setTodos(todosArr);
      setInProgressTodos(inProgressTodosArr);
      setCompletedTodos(completedTodosArr);
    });
    return () => unsubscribe();
  }, []);

  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, 'NotesCloud', todo.id), {
      completed: !todo.completed,
    });
  };

  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, 'NotesCloud', id));
  };

  const deleteCompletedTodo = async (todo) => {
    await deleteDoc(doc(db, 'NotesCloud', todo.id));
  };

  const returnCompletedTodo = async (todo) => {
    await updateDoc(doc(db, 'NotesCloud', todo.id), {
      completed: false,
      inProgress: false,
    });
  };

  const moveToInProgress = async (todo) => {
    await updateDoc(doc(db, 'NotesCloud', todo.id), {
      inProgress: true,
    });
  };

  return (
    <div className={Style.container}>
      <TodoInput input={input} setInput={setInput} createTodo={createTodo} />
      <div className={Style.content}>
        <TodoList
          todos={todos}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          moveToInProgress={moveToInProgress}
        />
        <div className={Style.contentList}>
          <h2 className={Style.title}>In Progress:</h2>
          <ul className={Style.list}>
            {inProgressTodos.map((todo) => (
              <li key={todo.id} className={Style.item}>
                <label className={Style.checkbox}>
                  <button onClick={() => returnCompletedTodo(todo)}><FaArrowLeft /></button>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleComplete(todo)}
                  />
                  {todo.text}
                </label>
                <button onClick={() => deleteTodo(todo.id)} className={Style.btn}>
                  <FaRegTrashAlt />
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className={Style.contentList}>
          <h2 className={Style.title}>Completed Todos:</h2>
          <ul className={Style.list}>
            {completedTodos.map((todo) => (
              <li
                key={todo.id}
                className={`${Style.item} ${todo.completed ? Style.completed : ''}`}
              >
                <button onClick={() => returnCompletedTodo(todo)}>
                  <FaArrowLeft />
                </button>
                {todo.text}
                <button onClick={() => deleteCompletedTodo(todo)} className={Style.btn}>
                  <FaRegTrashAlt />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GlobalTodo;
