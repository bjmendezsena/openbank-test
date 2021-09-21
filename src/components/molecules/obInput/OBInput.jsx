import React, { useState } from "react";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import "./OBInput.scss";

export const OBInput = ({
  placeHolder = "",
  onChange,
  withIcon = false,
  type = "",
  style = {},
  textLabel = ''
}) => {
  const [visible, setVisible] = useState(false);
  const iconClassName = "OBInput-container-icon";
  const iconSize = 36;

  const inputType = withIcon && visible ? "password" : type;

  return (
    <div className="OBInput">
      <label className="OBInput-label" htmlFor="text">{textLabel}</label>
      <div className="OBInput-container">
        <input
          style={{
            ...style,
          }}
          id="text"
          className="OBInput-container-input"
          placeholder={placeHolder}
          onChange={onChange}
          type={inputType}
          autoComplete="off"
        />

        {withIcon ? (
          visible ? (
            <AiOutlineEye
              className={iconClassName}
              onClick={() => setVisible(false)}
              id="visible-icon"
              size={iconSize}
              color="#002b45"
            />
          ) : (
            <AiOutlineEyeInvisible
              className={iconClassName}
              id="invisible-icon"
              size={iconSize}
              color="#c5d0d3"
              onClick={() => setVisible(true)}
            />
          )
        ) : null}
      </div>
    </div>
  );
};
