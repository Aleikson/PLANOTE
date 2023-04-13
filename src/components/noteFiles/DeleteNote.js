import { useState } from 'react';
import styles from "../noteFiles/DeleteNote.module.css"
import { PaletteColor } from './PaletteColor';

export const DeleteNote = ({ notes = [], deleteNote }) => {
  const limitedNotes = notes.slice(0, 12);
  const [selectedNoteId, setSelectedNoteId] = useState(null);

  const handleNoteClick = (noteId) => {
    setSelectedNoteId(selectedNoteId === noteId ? null : noteId);
  }

  return (
    <div className={styles.noteContainer}>
      {limitedNotes.map((note) => (
        <Note
          key={note.id}
          note={note}
          isSelected={selectedNoteId === note.id}
          handleNoteClick={handleNoteClick}
          deleteNote={deleteNote}
        />
      ))}
    </div>
  );
};

const Note = ({ note, isSelected, handleNoteClick, deleteNote }) => {
  const [noteBgColor, setNoteBgColor] = useState(note.bgColor || '#fcff82');

  const handleNoteColorChange = (color) => {
    setNoteBgColor(color);
    note.bgColor = color;
  };

  return (
    <div
      className={styles.note}
      style={{
        transform: `rotate(${note.rotate}deg)`,
        gridColumn: note.col,
        gridRow: note.row,
        backgroundColor: noteBgColor,
      }}
      onClick={() => handleNoteClick(note.id)}
    >
      <h2 className={styles.text}>{note.text}</h2>
      <button className={styles.deleteBtn} onClick={() => deleteNote(note.id)}>
        X
      </button>
      {isSelected && <PaletteColor onChange={handleNoteColorChange} />}
    </div>
  );
};