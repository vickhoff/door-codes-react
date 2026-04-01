import styles from "./Modal.module.css"
import closeIcon from "../../../assets/images/close-icon-black.svg"


function Modal({onClose, title, children}) {
  return (
    <div className={styles.modalWrapper}>
        <div className={styles.modal}>
          <header className={styles.modalHeader}>
              <h2>{title}</h2>
              <button onClick={onClose} className={styles.closeButton}><img src={closeIcon} alt="close"/></button>
          </header>
          {children}
        </div>
    </div>
  )
}

export default Modal