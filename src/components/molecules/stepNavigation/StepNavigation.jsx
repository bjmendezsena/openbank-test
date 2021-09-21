import React from "react";

import { Emoji } from "../../atoms/emoji/Emoji";
import { EMOJI_NAME } from "../../../constants/constants";

import "./StepNavigation.scss";
import { useSteps } from "../../../hooks/useSteps";

const Step = ({
  children,
  isCurrentStep = false,
  succeeded = false,
  withLine,
}) => {
  const currentClass = isCurrentStep
    ? "step_navigation-circle_wrapper-current"
    : "";
  const succeededClass = succeeded
    ? "step_navigation-circle_wrapper-succeeded"
    : "";
  const display = succeeded ? <Emoji name={EMOJI_NAME.CHECK} /> : children;
  const classNameStebBarSucceeded = "step_navigation-step_bar-succeeded";
  return (
    <>
      <div
        className={`step_navigation-circle_wrapper ${currentClass} ${succeededClass}`}
      >
        {display}
      </div>
      {withLine && (
        <div
          className={`step_navigation-step_bar ${
            succeeded ? classNameStebBarSucceeded : ""
          }`}
        ></div>
      )}
    </>
  );
};

export const StepNavigation = ({
  totalSteps = 0,
  currentStep = 1,
  fullSucceeded = false,
}) => {
  const { chekcIfIsSucceeded, steps, checkIfIsCurrent } = useSteps(
    totalSteps,
    currentStep,
    fullSucceeded
  );

  return (
    <div className="container">
      <div className="step_navigation">
        {React.Children.toArray(
          steps.map((step, i) => (
            <Step
              isCurrentStep={checkIfIsCurrent(step)}
              withLine={i < steps.length - 1}
              succeeded={chekcIfIsSucceeded(step, i)}
            >
              {step+1}
            </Step>
          ))
        )}
      </div>
    </div>
  );
};
