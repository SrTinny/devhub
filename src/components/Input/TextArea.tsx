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
  ...props
}) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>
        {label}
        {required && <span className={styles.asterisk}>*</span>}
      </label>

      <div className={`${styles.inputContainer} ${error ? styles.error : ""}`}>
        {icon && <span className={styles.icon}>{icon}</span>}
        <textarea className={styles.textarea} {...props} />
      </div>

      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
};

export default TextArea;
