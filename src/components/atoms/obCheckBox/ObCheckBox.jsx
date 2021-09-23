import React from "react";

import "./ObCheckBox.scss";

export const ObCheckBox = ({ labelText, onCheck, value = false, ...rest }) => {
  return (
    <label className="ob_checkbox">
      <input
        className="ob_checkbox-input"
        {...rest}
        type="checkbox"
        data-testid="test-id-checkbox"
        checked={value}
        onClick={onCheck}
        onChange={() => {}}
      />
      <span className="ob_checkbox-label">{labelText}</span>
    </label>
  );
};
