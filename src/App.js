import React from 'react';
import './App.css';
import { Global } from "./components/noteFiles/Global"
import { AddNote } from './components/noteFiles/AddNote';
import { DeleteNote } from './components/noteFiles/DeleteNote';
import { GlobalTodo } from './components/TodoFiles/GlobalTodo';
import { AddTodo } from './components/TodoFiles/AddTodo'
import { TodoList } from './components/TodoFiles/TodoList'

function App() {
  const { addNote, deleteNote, notesState } = Global();
  const { createTodo, input, setInput, todos, toggleComplete, deleteTodo } = GlobalTodo();

  return (
    <div className="App">
      <div className="left">
        <div className="inputs">
          <AddNote addNote={addNote} />
          <AddTodo createTodo={createTodo} input={input} setInput={setInput} />
        </div>
        <div className="box">BOX</div>
      </div>
      <div className="right">
        <DeleteNote notes={notesState.notes} deleteNote={deleteNote} />
        <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
}

export default App;