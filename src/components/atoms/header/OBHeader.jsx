import React from "react";
import "./OBHeader.scss";

export const OBHeader = ({ text = "", children, style = {} }) => {
  const display = children || text;

  if (!display) return;
  return (
    <div test-id="test-id-header" style={{ ...style }} className="OBHeader">
      <h1>{display}</h1>
    </div>
  );
};
