import React from "react";
import { ObCheckBox } from "./ObCheckBox";

import { render, fireEvent } from "@testing-library/react";

const getWrapper = (props = {}) => {
  return render(<ObCheckBox {...props} />);
};

describe("Test in ObCheckBox component", () => {
  it("Should display the component", () => {
    const labelText = "Title";

    const wrapper = getWrapper({ labelText });

    const { getByText } = wrapper;

    expect(getByText(labelText)).toBeInTheDocument();
  });

  it("Should check and uncheck the component", () => {
    const text = "Title";

    let value = false;

    const onCheck = jest.fn().mockImplementation(() => {
      value = !value;
    });

    const wrapper = getWrapper({ text,  onCheck });

    const { getByTestId } = wrapper;
    const instance = getByTestId("test-id-checkbox");

    fireEvent.click(instance);

    expect(onCheck).toBeCalled();
    expect(value).toBeTruthy();
    fireEvent.click(instance);
    expect(value).toBeFalsy();
  });
});
