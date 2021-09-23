import React from "react";
import { PassworManagerProvider } from "../../../context/PassworManagerContext";
import { StepNavigation } from "./StepNavigation";

export default {
  title: "Wizard/StepNavigation",
  component: StepNavigation,
};

export const Stepper = (args) => (
  <PassworManagerProvider>
    <StepNavigation {...args} />
  </PassworManagerProvider>
);

Stepper.args = {
  totalSteps: 3,
  fullSucceeded: false,
};
