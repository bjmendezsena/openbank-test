import React from "react";
import { shallow } from "enzyme";
import { StepNavigation } from "./StepNavigation";
import { PassworManagerProvider } from "../../../context/PassworManagerContext";

describe("Test inn StStepNavigationepper component", () => {
  it("Should display the component", () => {
    shallow(
      <PassworManagerProvider>
        <StepNavigation />
      </PassworManagerProvider>
    );
  });
});
