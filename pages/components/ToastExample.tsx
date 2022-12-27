import React, { useState } from "react";
import { useToastContext } from "../../components/toast/toastContext";

export const ToastExample = () => {
  const [text, setText] = useState("");
  const { addToast } = useToastContext();

  const handleTextChange: React.ChangeEventHandler<HTMLInputElement> | undefined = (event) => {
    setText(event.target.value);
  };

  const handleClick = () => {
    addToast(text);
  }

  return (
    <div>
      <h1>Hello Toasts</h1>
      <input value={text} onChange={handleTextChange}/>
      <button onClick={handleClick}>Show toast</button>
    </div>
  )
}
