import React from "react";
import { shallow } from "enzyme";
import { WizardContainer } from "./WizardContainer";


describe("Test inn WizardContainer component", () => {
  it("Should display the component", () => {
    shallow(<WizardContainer />);
  });
});
