import React from "react";

import { Emoji } from "../../atoms/emoji/Emoji";
import { EMOJI_NAME } from "../../../constants/constants";
import { useSteps } from "../../../hooks/useSteps";

import "./StepNavigation.scss";

const Step = ({
  children,
  isCurrentStep = false,
  succeeded = false,
  withLine,
  onClick,
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
        onClick={onClick}
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

export const StepNavigation = ({ totalSteps = 0, fullSucceeded = false }) => {
  const { chekcIfIsSucceeded, steps, checkIfIsCurrent, changeStep } = useSteps(
    totalSteps,
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
              onClick={() => changeStep(step)}
            >
              {step + 1}
            </Step>
          ))
        )}
      </div>
    </div>
  );
};
