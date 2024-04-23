import React from "react";
import "./CustomButton.css";

const CustomButton = ({ disabled, type, onClick, title, test }) => {
  return (
    <div className="custombutton">
    <button
      data-testid={test ? test : undefined}
      className= 'btn'
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      <div>{title}</div>
    </button>
    </div>
  );
};

export default CustomButton;
