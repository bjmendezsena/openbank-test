import React from "react";
import { EMOJI_NAME } from "../../../constants/constants.js";
import { Emoji } from "./Emoji";
import { storiesOf } from '@storybook/react';

storiesOf('Emojis', module)
.add('Head',() => <Emoji name={EMOJI_NAME.HEAD} />)
.add('Box', () => <Emoji name={EMOJI_NAME.BOX} />)
.add('Success',()=>  <Emoji name={EMOJI_NAME.SUCCESS} />)
.add('Warning',()=>  <Emoji name={EMOJI_NAME.WARNING} />)

