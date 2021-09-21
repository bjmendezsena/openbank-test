import React from "react";
import { OPButton } from "./OPButton";
import { storiesOf } from "@storybook/react";

storiesOf("Button", module)
  .add("Primary", () => <OPButton variant="primary">Primary</OPButton>)
  .add("Secondary", () => <OPButton variant="secondary">Secondary</OPButton>)
  .add("Light", () => <OPButton variant="light">Ligth</OPButton>)
  .add("ButtonIcon", () => (
    <OPButton variant="secondary" withIcon>
      Siguiente
    </OPButton>
  ));
