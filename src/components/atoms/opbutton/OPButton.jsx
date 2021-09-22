import React from "react";

import "./OPButton.scss";
import { BiChevronRight } from "react-icons/bi";

export const OPButton = ({
  children,
  onClick,
  variant = "primary",
  style = {},
  withIcon = false,
  disabled = false,
  ...rest
}) => {
  const variantStyle = `OBButton-${variant}`;
  const disabledClass = disabled ? "OBButton-disabled" : "";

  return (
    <button
      style={{ ...style }}
      className={`OBButton ${variantStyle} ${disabledClass}`}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
      {withIcon && <BiChevronRight size={26} />}
    </button>
  );
};
