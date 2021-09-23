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
  size = "medium",
  ...rest
}) => {
  const variantStyle = `OBButton-${variant}`;
  const disabledClass = disabled ? "OBButton-disabled" : "";
  const sizeClass = `OBButton-${size}`;

  return (
    <button
      style={{ ...style }}
      className={`OBButton ${variantStyle} ${disabledClass} ${sizeClass}`}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
      {withIcon && <BiChevronRight size={26} />}
    </button>
  );
};
