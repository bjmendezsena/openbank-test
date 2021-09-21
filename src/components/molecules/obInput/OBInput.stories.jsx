import React from "react";
import { OBInput } from "./OBInput";

export default {
  title: "Atoms/Input",
  component: OBInput,
};

export const IconInput = (args) => <OBInput {...args} textLabel="Crea tu contraseña maestra" style={{width:250}} withIcon placeHolder="Repite tu contraseña"  />;
export const Input = (args) => <OBInput {...args} textLabel="Crea tu pista para recordar tu contraseña (opcional)" placeHolder="Introduce tu pista"  />;
