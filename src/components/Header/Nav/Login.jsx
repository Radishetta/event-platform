import React from "react";
import Modal from "react-modal";
import "../../../styles/Login.css";
import { useState } from "react";

export const Login = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  if (modalIsOpen) {
    return (
      <>
        <div id="login" onClick={openModal}>
          Log in
        </div>
        <Modal
          style={{
            overlay: { backgroundColor: "transparent" },
            content: {
              backgroundColor: "gray",
              top: "50px",
              bottom: "400px",
            },
          }}
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Log In Screen"
        >
          <form>
            <input placeholder="Email" />
            <input placeholder="Password" type="password" />
          </form>
          <button onClick={closeModal}>Log In</button>
        </Modal>
      </>
    );
  } else {
    return (
      <div id="login" onClick={openModal}>
        Log in
      </div>
    );
  }
};
