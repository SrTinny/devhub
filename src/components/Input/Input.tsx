import type { FC, InputHTMLAttributes, ReactNode } from "react";
import styles from "./Input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
  icon?: ReactNode;
  error?: string;
}

const Input: FC<InputProps> = ({ label, required, icon, error, id, name, ...props }) => {
  const fieldId = id || name || label.toLowerCase().replace(/\s+/g, "-");
  const errorId = error ? `${fieldId}-error` : undefined;

  return (
    <div className={styles.wrapper}>
      <label htmlFor={fieldId} className={styles.label}>
        {label}
        {required && <span className={styles.asterisk}>*</span>}
      </label>

      <div className={`${styles.inputContainer} ${error ? styles.error : ""}`}>
        {icon && <span className={styles.icon} aria-hidden="true">{icon}</span>}
        <input
          id={fieldId}
          name={name}
          className={styles.input}
          aria-required={required}
          aria-invalid={!!error}
          aria-describedby={errorId}
          {...props}
        />
      </div>

      {error && (
        <span className={styles.errorText} id={errorId} role="alert">
          {error}
        </span>
      )}
    </div>
  );
};

export default Input;
