import React from "react";

const Input = ({ propsStyle, type, value, onChange, onSubmit }) => {
  return (
    <>
      {type == "file" ? (
        <input className={propsStyle} type={type} onChange={onChange} required/>
      ) : (
        <input
          className={propsStyle}
          type={type}
          value={value}
          onChange={onChange}
          maxLength={20}
          required
        />
      )}
    </>
  );
};

export default Input;
