import styles from "./Modal.module.css"
import closeIcon from "../../../assets/images/close-icon-black.svg"
// REVIEW: `useRef` is imported but never used. Remove it.
import { useRef, useEffect } from 'react'


function Modal({onClose, title, children}) {

  useEffect(() => {
    function handleEscape(event) {
        if (event.key === "Escape") onClose()
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
}, [onClose])

  return (
    {/* REVIEW: Clicking the backdrop (modalWrapper) doesn't close the modal.
        This is a common UX expectation. Consider adding onClick={onClose} to
        the wrapper and e.stopPropagation() on the inner modal div. */}
    {/* REVIEW: Body scroll is not locked when the modal is open. Users can scroll
        the page behind the modal overlay. Consider adding overflow:hidden to body. */}
    <div className={styles.modalWrapper}>
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className={styles.modal}
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