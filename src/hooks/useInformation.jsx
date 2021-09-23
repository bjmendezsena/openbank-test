import { useContext, useEffect, useState } from "react";
import { PasswordManagerContext } from "../context/PassworManagerContext";

export const useInformation = () => {
  const {
    acceptConditions,
    onAcceptConditions,
    changeToNextStep,
    resetState,
  } = useContext(PasswordManagerContext);

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (acceptConditions) {
      setChecked(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onContinueClick = () => {
    if (checked) {
      onAcceptConditions();
      changeToNextStep();
      setChecked(false);
    }
  };

  const onCancelClick = () => {
    setChecked(false);
    resetState();
  };

  const isEnabled = !checked;
  return {
    checked,
    isEnabled,
    onCancelClick,
    onContinueClick,
    setChecked,
  };
};
