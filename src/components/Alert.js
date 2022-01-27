import React from "react";
import "../styles/Alert.css";

const Alert = ({ children, variant }) => {
  return (
    <div className={`alert-${variant}`} variant={variant}>
      <p>{children}</p>
    </div>
  );
};

export default Alert;
