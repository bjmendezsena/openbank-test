import React from "react";

import { ReactComponent as BoxIcon } from "../../../assets/svg/boxSVG.svg";
import { ReactComponent as HeadSVG } from "../../../assets/svg/headSVG.svg";

import { ReactComponent as SuccessSVG } from "../../../assets/svg/successSGV.svg";
import { ReactComponent as WarningSVG } from "../../../assets/svg/warningSVG.svg";

const emogis = {
  BOX: <BoxIcon className="svg_icon" />,
  DONE: <SuccessSVG className="svg_icon" />,
  HEAD: <HeadSVG className="svg_icon" />,
  WARNING: <WarningSVG className="svg_icon" />,
};

export { emogis  };
