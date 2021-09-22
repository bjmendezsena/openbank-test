import React, { useState } from "react";

import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineInfoCircle,
} from "react-icons/ai";

import "./OBInput.scss";

export const OBInput = ({
  type = "",
  styleInput = {},
  style = {},
  textLabel = "",
  infoIcon = false,
  footer = "",
  error = "",
  ...rest
}) => {
  const withIcon = type === "password";
  const [visible, setVisible] = useState(false);
  const iconClassName = "OBInput-container-icon_container-icon";
  const iconSize = 36;

  const inputType = visible ? "default" : type;
  const haveError = error.length > 0;

  const errorClassShow = haveError ? "OBInput-footer-error-show" : "";
  const footerTextShow = footer.length > 0 ? "OBInput-footer-text-show" : "";
  const inputErrorClass = haveError ? "OBInput-container-input-error" : "";

  return (
    <div
      style={{
        ...style,
      }}
      className="OBInput"
    >
      <div className="OBInput-label_container">
        <h2 className="OBInput-label_container-label">{textLabel}</h2>
        {infoIcon && (
          <AiOutlineInfoCircle className="OBInput-label_container-info_icon" />
        )}
      </div>
      <div className="OBInput-container">
        <input
          style={{
            ...styleInput,
          }}
          className={"OBInput-container-input "+inputErrorClass}
          type={inputType}
          autoComplete="off"
          {...rest}
        />
        <div
          className="OBInput-container-icon_container"
          data-testid="test-icon-container-visible"
          onClick={() => setVisible(!visible)}
        >
          {withIcon ? (
            visible ? (
              <AiOutlineEye
                className={iconClassName}
                data-testid="test-icon-visible"
                size={iconSize}
                color="#002b45"
              />
            ) : (
              <AiOutlineEyeInvisible
                className={iconClassName}
                data-testid="test-icon-invisible"
                size={iconSize}
                color="#c5d0d3"
              />
            )
          ) : null}
        </div>
      </div>
      <div className="OBInput-footer">
        <span className={`OBInput-footer-error ${errorClassShow}`}>
          {error}
        </span>
        <div className={`OBInput-footer-text ${footerTextShow}`}>{footer}</div>
      </div>
    </div>
  );
};
