import React from "react";
import { StepNavigation } from "./StepNavigation";

export default {
  title: "Wizard/StepNavigation",
  component: StepNavigation,
};

export const Stepper = (args) => <StepNavigation {...args} />;

Stepper.args = {
  totalSteps:3,
  currentStep: 0,
  fullSucceeded:false
};
