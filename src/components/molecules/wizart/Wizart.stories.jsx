import React from "react";
import { Wizart } from "./Wizart";
import { PassworManagerProvider } from "../../../context/PassworManagerContext";

export default {
  title: "Wizard/WizardContainer",
  component: Wizart,
};

export const WizartContainer = (args) => (
  <PassworManagerProvider>
    <Wizart {...args} />
  </PassworManagerProvider>
);


