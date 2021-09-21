import React from "react";
import { OPButton } from "./OPButton";
import { render, fireEvent } from "@testing-library/react";

const getWrapper = (props = {}) => {
  return render(<OPButton {...props} />);
};

describe("Test in OPButton component", () => {
  const onClick = jest.fn();
  const children = "Hello button";

  it("Should display the document", () => {
    const wrapper = getWrapper({ children, onClick });
    const { getByText } = wrapper;

    expect(getByText(children)).toBeInTheDocument();
  });
  it("Should click the button", () => {
    const wrapper = getWrapper({ children, onClick });
    const { getByText } = wrapper;
    const instance = getByText(children);
    fireEvent.click(instance);

    expect(onClick).toBeCalled();
  });

  it("Should be display the primary button", () => {
    const variant = "primary";
    const wrapper = getWrapper({ children, onClick, variant });
    const { getByText } = wrapper;

    expect(getByText(children)).toHaveClass(`OBButton-${variant}`);
  });

  it("Should be the secondary button", () => {
    const variant = "secondary";
    const wrapper = getWrapper({ children, onClick, variant });
    const { getByText } = wrapper;

    expect(getByText(children)).toHaveClass(`OBButton-${variant}`);
  });

  it("Should be the secondary button", () => {
    const variant = "light";
    const wrapper = getWrapper({ children, onClick, variant });
    const { getByText } = wrapper;

    expect(getByText(children)).toHaveClass(`OBButton-${variant}`);
  });
});
