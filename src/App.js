import React from 'react';
import './App.css';
import { Global } from "./components/noteFiles/Global"
import { AddNote } from './components/noteFiles/AddNote';
import { Notes } from './components/noteFiles/Notes';
import { GlobalTodo } from './components/TodoFiles/GlobalTodo';
import { AddTodo } from './components/TodoFiles/AddTodo'
import { TodoList } from './components/TodoFiles/TodoList'
import { TextBox } from './components/TextBox';

function App() {
  const { addNote, deleteNote, notesState } = Global();
  const { createTodo, input, setInput, todos, toggleComplete, deleteTodo } = GlobalTodo();

  return (
    <div className="App">
      <div className="left">
        <AddNote addNote={addNote} />
        <AddTodo createTodo={createTodo} input={input} setInput={setInput} />
        <div className="boxText">
          <TextBox />
        </div>
      </div>
      <div className="right">
        <Notes notes={notesState.notes} deleteNote={deleteNote} />
        <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
}

export default App;