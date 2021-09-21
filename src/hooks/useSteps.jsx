import { useMemo } from "react";

export const useSteps = (
  totalSteps = 0,
  currentStep = 1,
  fullSucceeded = false
) => {
  const steps = useMemo(() => {
    const array = [];

    let item = 0;

    do {
      array.push(item);
      item++;
    } while (item < totalSteps);
    return array;
  }, [totalSteps]);

  const current = steps[currentStep] || steps[0];

  const chekcIfIsSucceeded = (step = 0, i = 0) => {
    if (fullSucceeded) return true;
    if (i < steps.indexOf(current)) return true;
    if (step === currentStep) return false;
  };
  const checkIfIsCurrent = (step = 0) => {
    if (fullSucceeded) return false;
    if (currentStep === step) return true;
    if (step === 0 && currentStep >= steps.length) return true;
    return false;
  };

  return {
    steps,
    chekcIfIsSucceeded,
    checkIfIsCurrent,
  };
};
