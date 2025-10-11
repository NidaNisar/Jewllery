import React, { useEffect } from "react";
import "./Alert.css";

const Alert= ({ type = "info", message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onClose) onClose();
    }, 4000); 
    return () => clearTimeout(timer);
  }, [onClose]);
// alert
  return (
    <div className={`alert-box ${type}`}>
      <span>{message}</span>
    </div>
  );
};

export default Alert;
