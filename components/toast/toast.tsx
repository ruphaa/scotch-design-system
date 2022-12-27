import { ReactNode } from "react";
import styles from "./toast.module.css";

export type ToastProps = {
  children: ReactNode;
  close?: () => void;
};

export const Toast = ({ children, close }: ToastProps) => {
  return (
    <output className={styles.toast} role="status">
      <div className={styles.toastText}>{children}</div>
      {/* <button className={styles.toastCloseBtn} onClick={close}>
        x
      </button> */}
    </output>
  );
};

export const ToastContainer = ({children}: {children: ReactNode}) => {
  return (
    <section className={styles.toastContainer}>
      {children}
    </section>
  )
};
