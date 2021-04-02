import styles from "./Modal.module.css";

const Modal = ({ handleClickYes, setModal }) => {
  const handleContainerClick = (e) => {
    e.stopPropagation();
    setModal(false);
  };

  return (
    <div onClick={handleContainerClick} className={styles.outerContainer}>
      <div className={styles.container}>
        <button onClick={() => setModal(false)} className={styles.close}>
          Close
        </button>
        <div className={styles.innerContainer}>
          <p className={styles.text}>Are You sure you want delete item?</p>
          <div className={styles.btnContainer}>
            <button onClick={() => setModal(false)} className={styles.btn}>
              No
            </button>
            <button onClick={handleClickYes} className={styles.btn}>
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
