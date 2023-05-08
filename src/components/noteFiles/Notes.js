import { useState } from 'react';
import styles from "../noteFiles/Notes.module.css"
import { PaletteColor } from './PaletteColor';

export const Notes = ({ notes = [], deleteNote }) => {
  const limitedNotes = notes.slice(0, 5);
  const [selectedNoteId, setSelectedNoteId] = useState(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const handleNoteClick = (noteId) => {
    setSelectedNoteId(selectedNoteId === noteId ? null : noteId);
  }

  const handleDeleteConfirmation = () => {
    deleteNote(selectedNoteId);
    setShowDeleteConfirmation(false);
    setSelectedNoteId(null);
  }

  return (
    <div className={styles.noteContainer}>
      {limitedNotes.map((note) => (
        <Note
          key={note.id}
          note={note}
          isSelected={selectedNoteId === note.id}
          handleNoteClick={handleNoteClick}
          setShowDeleteConfirmation={setShowDeleteConfirmation}
        />
      ))}
      {showDeleteConfirmation && (
        <Modal show={showDeleteConfirmation} onClose={() => setShowDeleteConfirmation(false)}>
          <p>Do you really want to delete this note?</p>
          <button onClick={handleDeleteConfirmation}>Yes</button>
          <button onClick={() => setShowDeleteConfirmation(false)}>No</button>
        </Modal>
      )}
    </div>
  );
};

const Note = ({ note, isSelected, handleNoteClick, setShowDeleteConfirmation }) => {
  const [noteBgColor, setNoteBgColor] = useState(note.bgColor || '#fcff82');

  const handleNoteColorChange = (color) => {
    setNoteBgColor(color);
    note.bgColor = color;
  };

  const handleDeleteNote = () => {
    setShowDeleteConfirmation(true);
  }

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
      <button className={styles.deleteBtn} onClick={handleDeleteNote}>
        X
      </button>
      {isSelected && <PaletteColor onChange={handleNoteColorChange} />}
    </div>
  );
};

const Modal = ({ children, onClose }) => {
  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles["modal-content"]} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};