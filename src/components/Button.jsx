import React from "react";

function Button({ bgColor, changeColor }) {
  return (
    <button
      className="button"
      onClick={changeColor}
      style={{ backgroundColor: bgColor }}
    >
      {bgColor}
    </button>
  );
}

export default Button;
