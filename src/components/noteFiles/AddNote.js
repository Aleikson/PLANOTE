import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import styles from "../noteFiles/AddNote.module.css"
import { AiOutlinePlus } from 'react-icons/ai';

export const AddNote = ({ addNote }) => {
  const [noteText, setNoteText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!noteText) {
      return;
    }

    const newNote = {
      id: uuid(),
      text: noteText,
      rotate: Math.floor(Math.random() * 20),
    };

    addNote(newNote);
    setNoteText('');
  };

  return (
    <div className={styles.container}>
      <h2>Add Notes</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <textarea maxLength={125}
          placeholder="Add Note"
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
        ></textarea>
        <button className={styles.button}>
            <AiOutlinePlus size={30} />
          </button>
      </form>
    </div>
  );
}