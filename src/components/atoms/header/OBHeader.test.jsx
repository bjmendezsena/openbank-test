import React from "react";
import { OBHeader } from "./OBHeader";

import { render } from "@testing-library/react";

const getWrapper = (props = {}) => {
  return render(<OBHeader {...props} />);
};

describe("Test in Title component", () => {
  it("Should display the component", () => {
    const text = "Title";

    const wrapper = getWrapper({ text });

    const { getByText } = wrapper;

    expect(getByText(text)).toBeInTheDocument();
  });

  it("Should display the component with the correct styles", () => {
    const text = "Title";

    const wrapper = getWrapper({ text }).asFragment();

    expect(wrapper).toMatchSnapshot();
  });
});
