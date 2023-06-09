import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Global } from "./components/noteFiles/Global"
import { AddNote } from './components/noteFiles/AddNote';
import { Notes } from './components/noteFiles/Notes';
import { GlobalTodo } from './components/TodoFiles/GlobalTodo';
import { AddTodo } from './components/TodoFiles/AddTodo'
import { TodoList } from './components/TodoFiles/TodoList'
import { TextBox } from './components/TextBox';
import NavBar from './components/navbar/NavBar';

function App() {
  const { addNote, deleteNote, notesState } = Global();
  const { createTodo, input, setInput, todos, toggleComplete, deleteTodo } = GlobalTodo();

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<div className='containerNote'>
            <AddNote addNote={addNote} />
            <Notes notes={notesState.notes} deleteNote={deleteNote} />
            <TextBox />
          </div>} />

          <Route path="todo" element={<div className='containerTodo'>
            <AddTodo createTodo={createTodo} input={input} setInput={setInput} />
            <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
          </div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;