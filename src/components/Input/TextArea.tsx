import type { FC, TextareaHTMLAttributes, ReactNode } from "react";
import styles from "./Input.module.css";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  required?: boolean;
  icon?: ReactNode;
  error?: string;
}

const TextArea: FC<TextAreaProps> = ({
  label,
  required,
  icon,
  error,
  id,
  name,
  ...props
}) => {
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
        <textarea
          id={fieldId}
          name={name}
          className={styles.textarea}
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

export default TextArea;
