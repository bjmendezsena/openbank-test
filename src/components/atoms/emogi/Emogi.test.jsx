import React from "react";
import ReactDom from "react-dom";
import { Emogi } from "./Emogi";
import { EMOGI_NAME } from "../../../constants/constants.js";

describe("Tests in emogi component", () => {
  it("Should display the component", () => {
    const container = document.createElement("div");

    document.body.appendChild(container);
    ReactDom.render(<Emogi name={EMOGI_NAME.HEAD} />, container);
    const icons = container.querySelectorAll(".emogi");

    expect(icons.length).toBe(1);
    document.body.removeChild(container);
    container.remove();
  });
});
