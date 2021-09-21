import React from "react";

import "./OPButton.scss";
import { BiChevronRight } from "react-icons/bi";

export const OPButton = ({
  children,
  onClick,
  variant = "primary",
  style = {},
  withIcon = false,
}) => {
  const variantStyle = `OBButton-${variant}`;

  return (
    <button
      type="button"
      style={{ ...style }}
      className={`OBButton ${variantStyle}`}
      onClick={onClick}
    >
      {children}
      {withIcon && <BiChevronRight size={26} />}
    </button>
  );
};
