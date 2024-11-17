import React from "react";

const Label = ({ propsStyle, name }) => {
  return (
    <>
      <label className={propsStyle}>{name}</label>
    </>
  );
};

export default Label;
