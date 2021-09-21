import React from "react";
import { EMOJI_NAME } from "../../../constants/constants.js";
import { CardEmojiInfo } from "./CardEmojiInfo";

import { storiesOf } from "@storybook/react";

const textBody =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia cumque velit fugiat omnis dicta asperiores, doloremque, optio exercitationem quas quo quae dolor at! In, distinctio non repellendus tempora reiciendis pariatur.";
storiesOf("Card", module)
  .add("HeaIcon", () => (
    <CardEmojiInfo textBody={textBody} emojiName={EMOJI_NAME.HEAD} />
  ))
  .add("BoxIcon", () => (
    <CardEmojiInfo textBody={textBody} emojiName={EMOJI_NAME.BOX} />
  ));
