import React from "react";
import Modal from "react-modal";
import styles from "./DafiModal.module.scss";
import cancel from "../../../assets/images/cancel.svg";
//@ts-ignore
const DafiModal = ({ isOpen, toggle, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={toggle}
      contentLabel="HOGI Modal"
      className={styles.modal}
      overlayClassName={styles.modalOverlay}
    >
      {/* Modal Content Here */}
      <div className={styles.modalContent}>
        <div className={styles.header}>
          <div className={styles.cancel}>
            <img onClick={toggle} src={cancel} alt="cancel" />
          </div>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </Modal>
  );
};

export default DafiModal;
