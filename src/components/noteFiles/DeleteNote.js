import React from 'react';
import styles from "../noteFiles/DeleteNote.module.css"

export const DeleteNote = ({ notes = [], deleteNote }) => {
  return (
    <>
      {notes.map((note) => (
        <div
          className={styles.note}
          style={{ transform: `rotate(${note.rotate}deg)` }}
          key={note.id}
          draggable="true"
          onDragEnd={(e) => {
            e.target.style.left = `${e.pageX - 50}px`;
            e.target.style.top = `${e.pageY - 50}px`;
          }}
        >
          <h2 className={styles.text}>{note.text}</h2>
          <button className={styles.deleteBtn} onClick={() => deleteNote(note.id)}>
            X
          </button>
        </div>
      ))}
    </>
  );
}