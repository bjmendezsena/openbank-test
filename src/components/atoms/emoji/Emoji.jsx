import React from "react";
import "./Emoji.scss";
import { emojis } from "./emojis";

export const Emoji = ({ name = "" }) => {
  const emoji = emojis[name];

  if (!emoji) return null;

  return <div test-id="test-id-icon" data-testid='emoji-test' className="emoji">

    {emoji}
  </div>;
};
