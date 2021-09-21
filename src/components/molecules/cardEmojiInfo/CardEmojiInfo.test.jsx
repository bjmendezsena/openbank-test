import React from "react";
import { EMOJI_NAME } from "../../../constants/constants";
import { CardEmojiInfo } from "./CardEmojiInfo";
import { render } from "@testing-library/react";

describe("Test in CardEmojiInfo", () => {
  it("Should be display the component", () => {
    const textBody =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet incidunt mollitia, ipsam nemo debitis natus quasi quidem laboriosam temporibus nesciunt soluta. Asperiores expedita non perspiciatis quibusdam similique blanditiis sed voluptas.";

    const { getByText, queryByTestId } = render(
      <CardEmojiInfo textBody={textBody} emojiName={EMOJI_NAME.HEAD} />
    );

    expect(getByText(textBody)).toBeInTheDocument();
    expect(queryByTestId("emoji-test")).toBeInTheDocument();
  });
});
