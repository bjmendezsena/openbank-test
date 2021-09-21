import React from "react";
import { OBInput } from "./OBInput";

import { storiesOf } from "@storybook/react";

export default {
  title: "Molecules/Input",
  component: OBInput,
};

const style = {
  width: 350,
};
storiesOf("Input", module)
  .add("Text input", () => (
    <OBInput placeHolder="Repite tu contraseña" style={style} />
  ))
  .add("Input with label", () => (
    <OBInput textLabel="Crea tu contraseña maestra" style={style} />
  ))
  .add("Password input", () => (
    <OBInput
      textLabel="Crea tu contraseña maestra"
      type="password"
      style={style}
    />
  ))
  .add("Input with footer", () => (
    <OBInput
      textLabel="Crea tu contraseña maestra"
      footer="0/60"
      style={style}
    />
  ))
  .add("Input with infoIcon", () => (
    <OBInput
      textLabel="Crea tu pista para recordar tu contraseña (opcional)"
      infoIcon
    />
  ));
