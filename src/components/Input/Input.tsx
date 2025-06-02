import type { FC, InputHTMLAttributes, ReactNode } from "react";
import styles from "./Input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
  icon?: ReactNode;
  error?: string;
}

const Input: FC<InputProps> = ({ label, required, icon, error, ...props }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>
        {label}
        {required && <span className={styles.asterisk}>*</span>}
      </label>

      <div className={`${styles.inputContainer} ${error ? styles.error : ""}`}>
        {icon && <span className={styles.icon}>{icon}</span>}
        <input className={styles.input} {...props} />
      </div>

      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
};

export default Input;
