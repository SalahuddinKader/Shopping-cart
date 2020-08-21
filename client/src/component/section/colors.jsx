import React from "react";

const Colors = ({ colors }) => {
  return (
    <div className="colors">
      {colors.colors.map((color, i) => (
        <button key={i} style={{ background: color }}>
          {}
        </button>
      ))}
    </div>
  );
};

export default Colors;
