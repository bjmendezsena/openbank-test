import React from "react";
import ReactDom from "react-dom";
import { Emoji } from "./Emoji";
import { EMOJI_NAME } from "../../../constants/constants.js";

describe("Tests in emogi component", () => {
  it("Should display the component", () => {
    const container = document.createElement("div");

    document.body.appendChild(container);
    ReactDom.render(<Emoji name={EMOJI_NAME.HEAD} />, container);
    const icons = container.querySelectorAll(".emoji");

    expect(icons.length).toBe(1);
    document.body.removeChild(container);
    container.remove();
  });
});
