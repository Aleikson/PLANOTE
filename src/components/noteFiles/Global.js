import { useReducer, useEffect } from 'react';

export const Global = () => {
  const initialState = {
    lastNoteCreatedAt: null,
    totalNotes: 0,
    notes: [],
  };

  const getInitialState = () => {
    const savedState = localStorage.getItem('notesState');
    return savedState ? JSON.parse(savedState) : initialState;
  };

  const notesReducer = (prevState, action) => {
    switch (action.type) {
      case 'ADD_NOTE':
        const newNote = {
          lastNoteCreatedAt: new Date().toTimeString().slice(0, 8),
          totalNotes: prevState.notes.length + 1,
          notes: [...prevState.notes, action.payload],
        };
        const newState = { ...prevState, ...newNote };
        localStorage.setItem('notesState', JSON.stringify(newState));
        return newState;

      case 'DELETE_NOTE':
        const deleteNote = {
          ...prevState,
          totalNotes: prevState.notes.length - 1,
          notes: prevState.notes.filter((note) => note.id !== action.payload),
        };
        localStorage.setItem('notesState', JSON.stringify(deleteNote));
        return deleteNote;

      default:
        return prevState;
    }
  };

  const [notesState, dispatch] = useReducer(notesReducer, getInitialState());

  const addNote = (newNote) => {
    dispatch({ type: 'ADD_NOTE', payload: newNote });
  };

  const deleteNote = (id) => {
    dispatch({ type: 'DELETE_NOTE', payload: id });
  };

  useEffect(() => {
    localStorage.setItem('notesState', JSON.stringify(notesState));
  }, [notesState]);

  return {
    addNote,
    deleteNote,
    notesState,
  };
};