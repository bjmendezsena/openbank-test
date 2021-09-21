import React from "react";
import { OPButton } from "./OPButton";

export default {
  title: "Atoms/Button",
  component: OPButton,
};

export const Primary = (args) => <OPButton variant="primary">Button</OPButton>;

export const Secondary = (args) => (
  <OPButton variant="secondary">Button</OPButton>
);

export const Terciary = (args) => <OPButton variant="light">Button</OPButton>;

export const ButtonIcon = (args) => (
  <OPButton variant="secondary" withIcon>
    Siguiente
  </OPButton>
);
