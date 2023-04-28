import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import styles from "../noteFiles/AddNote.module.css"
import { AiOutlinePlus } from 'react-icons/ai';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export const AddNote = ({ addNote }) => {
  const [noteText, setNoteText] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

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
    setModalOpen(false);
  };

  return (
    <div className={styles.container}>
      <h2>Notes</h2>
      <button onClick={() => setModalOpen(true)}>
        <AiOutlinePlus size={30} />
      </button>

      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        contentLabel="Add Note"
        className={styles.modal}
      >
        <form className={styles.form} onSubmit={handleSubmit}>
          <textarea maxLength={125}
            placeholder="Add Note"
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
          ></textarea>
          <button type="submit" className={styles.button}>
            Add
          </button>
        </form>
      </Modal>
    </div>
  );
};