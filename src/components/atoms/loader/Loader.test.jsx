import React from "react";
import { render } from "@testing-library/react";
import { Loader } from "./Loader";

describe("Test in Loader", () => {
  it("Should be display the component", () => {
    const { queryByTestId } = render(<Loader />);

    expect(queryByTestId("emoji-test")).toBeInTheDocument();
  });
});
