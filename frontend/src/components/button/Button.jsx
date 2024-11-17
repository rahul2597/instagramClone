import React from "react";

const Button = ({ propStyle, textStyle, name, onClick }) => {
  return (
    <>
      <button className={propStyle} onClick={(e) => {
        e.stopPropagation();
        onClick(e);
      }}>
        <div className={textStyle}>{name}</div>
      </button>
    </>
  );
};

export default Button;
