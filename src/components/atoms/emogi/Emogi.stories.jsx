import React from "react";
import { EMOGI_NAME } from "../../../constants/constants.js";
import { Emogi } from "./Emogi";

export default {
  title: "Atoms/Emogis",
  component: Emogi,
};

export const Head = (args) => <Emogi name={EMOGI_NAME.HEAD} />;
export const Box = (args) => <Emogi name={EMOGI_NAME.BOX} />;
