import React from "react";
import { Emoji } from "../../atoms/emoji/Emoji";

import "./CardEmojiInfo.scss";

export const CardEmojiInfo = ({ textBody = "", emojiName = "" }) => {
  return (
    <div className="card_info_container">
      <div className="card_info_container-emoji_container">
        <Emoji name={emojiName} />
      </div>
      <div className="card_info_container-text_body_container">
        <span className='card_info_container-text_body_container-text' >{textBody}</span>
      </div>
    </div>
  );
};
