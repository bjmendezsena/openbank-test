import React from "react";
import { EMOJI_NAME } from "../../../constants/constants.js";
import { Emoji } from "./Emoji";
import { storiesOf } from '@storybook/react';
const style = {
    width:100
}
storiesOf('Emojis', module)
.add('Head',() => <Emoji name={EMOJI_NAME.HEAD} />)
.add('Box', () => <Emoji name={EMOJI_NAME.BOX} />)
.add('Success',()=>  <div style={style} ><Emoji name={EMOJI_NAME.SUCCESS} /></div>)
.add('Warning',()=>  <div style={style} ><Emoji name={EMOJI_NAME.WARNING} /></div>)

