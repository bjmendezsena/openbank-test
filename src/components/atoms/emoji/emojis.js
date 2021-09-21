import React from "react";

import { ReactComponent as BoxIcon } from "../../../assets/svg/boxSVG.svg";
import { ReactComponent as HeadSVG } from "../../../assets/svg/headSVG.svg";

import { ReactComponent as SuccessSVG } from "../../../assets/svg/successSGV.svg";
import { ReactComponent as WarningSVG } from "../../../assets/svg/warningSVG.svg";
import { ReactComponent as CheckSVG } from "../../../assets/svg/check.svg";

const emojis = {
  BOX: (
    <BoxIcon
      id="emoji-box"
      data-testid="test-emoji-BOX"
      className="emoji-svg_emoji-BOX"
    />
  ),
  SUCCESS: (
    <SuccessSVG
      className="emoji-svg_emoji-SUCCESS"
      data-testid="test-emoji-SUCCESS"
    />
  ),
  HEAD: (
    <HeadSVG className="emoji-svg_emoji-HEAD" data-testid="test-emoji-HEAD" />
  ),
  WARNING: (
    <WarningSVG
      className="emoji-svg_emoji-WARNING"
      data-testid="test-emoji-WARNING"
    />
  ),
  CHECK: (
    <CheckSVG
      className="emoji-svg_emoji-CHECK"
      data-testid="test-emoji-CHECK"
    />
  ),
};

export { emojis };
