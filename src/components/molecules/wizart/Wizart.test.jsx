import React from "react";
import { shallow } from "enzyme";
import { Wizart } from "./Wizart";
import { PassworManagerProvider } from "../../../context/PassworManagerContext";

describe("Test inn WizardContainer component", () => {
  it("Should display the component", () => {
    shallow(
      <PassworManagerProvider>
        <Wizart />
      </PassworManagerProvider>
    );
  });
});
