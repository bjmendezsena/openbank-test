import React from "react";
import "./Emogi.scss";
import { emogis } from "./emogis";

export const Emogi = ({ name = "" }) => {
  const emogi = emogis[name];

  if (!emogi) return null;

  return <div test-id="test-id-icon" className="emogi">

    {emogi}
  </div>;
};
