import React from "react";
import { getText } from "../../../utils/utils";
import { OBHeader } from "../../atoms/header/OBHeader";
import { StepNavigation } from "../stepNavigation/StepNavigation";
import { OPButton } from "../../atoms/opbutton/OPButton";

import "./Wizart.scss";

export const Wizart = ({
  children,
  currentStep = 0,
  fullSucceeded = false,
}) => {
  return (
    <div className="wizart">
      <div className="wizart-header">
        <StepNavigation
          currentStep={currentStep}
          totalSteps={3}
          fullSucceeded={fullSucceeded}
        />
      </div>
      <div className="wizart-content">
        <div className="wizart-content-title">
          <OBHeader text={getText("wizard.header")} />
        </div>
        {children}
        <div className="wizart-content-footer">
          <div className="wizart-content-footer-buttons">
            <OPButton variant="light">{getText("wizard.btn_cancel")}</OPButton>
            <OPButton variant="secondary" withIcon>
              {getText("wizard.btn_continue")}
            </OPButton>
          </div>
        </div>
      </div>
    </div>
  );
};
