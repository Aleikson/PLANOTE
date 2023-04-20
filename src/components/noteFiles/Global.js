import React, { useReducer } from 'react';
import { DeleteNote } from "./DeleteNote"
import { AddNote } from './AddNote';
import styles from "../noteFiles/Global.module.css"

export const Global = () => {
  const initialState = {
    lastNoteCreatedAt: null,
    totalNotes: 0,
    notes: [],
  };

  const notesReducer = (prevState, action) => {
    switch (action.type) {
      case 'ADD_NOTE':
        const newNote = {
          lastNoteCreatedAt: new Date().toTimeString().slice(0, 8),
          totalNotes: prevState.notes.length + 1,
          notes: [...prevState.notes, action.payload],
        };
        return newNote;

      case 'DELETE_NOTE':
        const deleteNote = {
          ...prevState,
          totalNotes: prevState.notes.length - 1,
          notes: prevState.notes.filter((note) => note.id !== action.payload),
        };
        return deleteNote;

      default:
        return prevState;
    }
  };

  const [notesState, dispatch] = useReducer(notesReducer, initialState);

  const addNote = (newNote) => {
    dispatch({ type: 'ADD_NOTE', payload: newNote });
  };

  const deleteNote = (id) => {
    dispatch({ type: 'DELETE_NOTE', payload: id });
  };

  return (
    <>      
      <AddNote addNote={addNote} />
      <DeleteNote notes={notesState.notes} deleteNote={deleteNote} />
    </>
  );
}