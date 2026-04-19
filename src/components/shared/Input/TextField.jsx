import styles from "./Input.module.css";

export function TextField({ label, error, id, required, disabled, ...rest }) {
  return (
    <div className={styles.inputDiv}>
      {label && (
        <label htmlFor={id}>
          {label}
          {required && <span className={styles.required}> *</span>}
        </label>
      )}
      <input
        className={`${styles.input} ${error && styles.inputError}`}
        id={id}
        disabled={disabled}
        required={required}
        {...rest}
      />
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
}
