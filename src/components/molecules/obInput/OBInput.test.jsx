import React from "react";
import { OBInput } from "./OBInput";
import { render, fireEvent } from "@testing-library/react";

const getWrapper = (props = {}) => {
  return render(<OBInput {...props} />);
};

describe("Test in OPinput component", () => {
  const onChange = jest.fn();
  const placeholder = "Input";

  it("Should display the document", () => {
    const wrapper = getWrapper({ onChange,  placeholder });
    const { getByPlaceholderText } = wrapper;

    expect(getByPlaceholderText(placeholder)).toBeInTheDocument();
  });
  it("Should change the value", () => {
    const wrapper = getWrapper({ onChange,  placeholder });
    const newValue = "Hola mundo";
    const { getByPlaceholderText } = wrapper;
    const input = getByPlaceholderText(placeholder);
    fireEvent.change(input, { target: { value: newValue } });

    expect(input.value).toBe(newValue);
  });

  it("Should display the invisible icon", () => {
    const type = 'password';
    const testid = "test-icon-invisible";
    const wrapper = getWrapper({ onChange,  placeholder, type });

    const { queryByTestId } = wrapper;

    expect(queryByTestId(testid)).toBeInTheDocument();
  });

  it("Should display the visible icon", () => {
    const type = 'password';
    const testid = "test-icon-visible";
    const testidContainer = "test-icon-container-visible";
    const wrapper = getWrapper({ onChange,  placeholder, type });

    const { queryByTestId } = wrapper;
    const container = queryByTestId(testidContainer);
    fireEvent.click(container);
    const icon = queryByTestId(testid);

    expect(icon).toBeInTheDocument();
  });
});
