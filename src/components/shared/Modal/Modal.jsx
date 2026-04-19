import styles from "./Modal.module.css"
import closeIcon from "../../../assets/images/close-icon-black.svg"
import { useEffect } from 'react'


function Modal({onClose, title, children}) {

  useEffect(() => {
    function handleEscape(event) {
        if (event.key === "Escape") onClose()
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
}, [onClose])

  return (
    <div className={styles.modalWrapper} onClick={onClose}>
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className={styles.modal}
          onClick={(e) => e.stopPropagation()}
        >
          <header className={styles.modalHeader}>
              <h2>{title}</h2>
              <button onClick={onClose} aria-label="Close modal" className={styles.closeButton}><img src={closeIcon} alt=""/></button>
          </header>
          {children}
        </div>
    </div>
  )
}

export default Modal