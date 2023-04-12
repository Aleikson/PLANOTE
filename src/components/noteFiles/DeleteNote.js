import { useState } from 'react';
import styles from "../noteFiles/DeleteNote.module.css"
import { PaletteColor } from './PaletteColor';

export const DeleteNote = ({ notes = [], deleteNote }) => {
  const limitedNotes = notes.slice(0, 8);
  const [noteBgColor, setNoteBgColor] = useState('#fff');

  const handleNoteColorChange = (color) => {
    setNoteBgColor(color);
  };

  return (
    <div className={styles.noteContainer}>
      {limitedNotes.map((note) => (
        <div
          className={styles.note}
          style={{
            transform: `rotate(${note.rotate}deg)`,
            gridColumn: note.col,
            gridRow: note.row,
            backgroundColor: noteBgColor,
          }}
          key={note.id}
        >
          <h2 className={styles.text}>{note.text}</h2>
          <button className={styles.deleteBtn} onClick={() => deleteNote(note.id)}>
            X
          </button>
          <PaletteColor onChange={handleNoteColorChange} />
        </div>
      ))}
    </div>
  );
};