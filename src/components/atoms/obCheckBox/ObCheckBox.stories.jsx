import React from "react";
import { storiesOf } from "@storybook/react";
import { ObCheckBox } from "./ObCheckBox";

storiesOf("Checkbox", module).add("Check", () => (
  <ObCheckBox labelText="Admito que soy mayor de 18 años y acepto las condiciones establecidas en el contrato" />
));
