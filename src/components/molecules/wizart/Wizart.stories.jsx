import React from "react";
import { Wizart } from "./Wizart";
import StepNavigationStorie from "../stepNavigation/StepNavigation.stories";

export default {
  title: "Wizard/WizardContainer",
  component: Wizart,
};

export const WizartContainer = (args) => <Wizart {...args} />;

WizartContainer.args = {
  ...StepNavigationStorie,
  fullSucceeded: false,
  currentStep: 0,
};
