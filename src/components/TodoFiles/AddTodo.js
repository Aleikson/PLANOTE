import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from "./GlobalTodo.module.css";
import { AiOutlinePlus } from 'react-icons/ai';

Modal.setAppElement('#root');

export const AddTodo = ({ createTodo, input, setInput }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo();
    closeModal();
  }

  return (
    <div className={styles.container}>
      <h2>Todo</h2>
      <button onClick={openModal}>
        <AiOutlinePlus size={30} />
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Add Todo"
        className={styles.modal}
      >
        <form onSubmit={handleSubmit} className={styles.form}>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type='text'
            placeholder='Add Todo'
          />
          <button className={styles.button}>
            Add Todo
          </button>
        </form>
      </Modal>
    </div>
  );
};