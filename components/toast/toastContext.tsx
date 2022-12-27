import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from "react";
import type { ToastProps } from "./toast";
import { Toast, ToastContainer } from "./toast";


export const ToastContext = createContext({addToast: (toast: ToastProps["children"]) => {}});

export const ToastContextProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<ReactNode[]>([]);

  useEffect(() => {
    if(toasts.length > 0) {
      const timer = setTimeout(() => setToasts(toasts => toasts.slice(1)), 3000);
      return () => clearTimeout(timer);
    }
  }, [toasts])

  const addToast = useCallback((toast: ToastProps["children"]) => {
    setToasts(toasts => [...toasts, toast])
  }, [setToasts]);

  return (
    <ToastContext.Provider value={{addToast}}>
      {children}
      <ToastContainer>
        {
          toasts.map((toast) => (
            <Toast>
              {toast}
            </Toast>
          ))
        }
      </ToastContainer>
    </ToastContext.Provider>
  )
}

export const useToastContext = () => useContext(ToastContext);
