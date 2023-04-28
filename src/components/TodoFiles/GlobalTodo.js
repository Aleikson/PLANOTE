import { useState, useEffect } from 'react';
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

export const GlobalTodo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const createTodo = async (e) => {
    e?.preventDefault();
    
    if (input === '') {
      alert('Please enter a valid todo');
      return;
    }
  
    await addDoc(collection(db, 'todos'), {
      text: input,
      completed: false,
    });
  
    setInput('');
  };;

  useEffect(() => {
    const q = query(collection(db, 'todos'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArr);
    });
    return () => unsubscribe();
  }, []);

  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, 'todos', todo.id), {
      completed: !todo.completed,
    });
  };

  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, 'todos', id));
  };

  return {
    createTodo,
    input,
    setInput,
    todos,
    toggleComplete,
    deleteTodo
  };
};