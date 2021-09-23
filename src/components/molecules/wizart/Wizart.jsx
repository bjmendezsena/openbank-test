import React from "react";
import { getText } from "../../../utils/utils";
import { OBHeader } from "../../atoms/header/OBHeader";
import { StepNavigation } from "../stepNavigation/StepNavigation";
import Step1 from "../../../views/ProductInformation";
import Step2 from "../../../views/Form";
import Step3 from "../../../views/Feedback";
import { useWizart } from "../../../hooks/useWizart";

import "./Wizart.scss";
import { Loader } from "../../atoms/loader/Loader";

export const Wizart = () => {
  const {
    onCancel,
    stepClassName,
    wizardHidden,
    handleSubmit,
    totalSteps,
    fullSucceeded,
    form,
    currentStep,
    loading,
  } = useWizart();

  return (
    <div className={`wizart ${wizardHidden}`}>
      <div className="wizart-header">
        <StepNavigation
          currentStep={currentStep}
          totalSteps={totalSteps}
          fullSucceeded={fullSucceeded}
        />
      </div>
      <div className={"wizart-content " + stepClassName}>
        <div className="wizart-content-title">
          {currentStep !== 2 && <OBHeader text={getText("wizard.header")} />}
        </div>
        {currentStep === 1 ? (
          <Step2
            loading={loading}
            onCancel={onCancel}
            values={form}
            handleSubmit={handleSubmit}
          />
        ) : currentStep === 2 ? (
          <Step3 />
        ) : (
          <Step1 />
        )}
        {loading ? <Loader /> : null}
      </div>
    </div>
  );
};
