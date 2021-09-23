import { useContext } from "react";
import { EMOJI_NAME } from "../constants/constants";
import { PasswordManagerContext } from "../context/PassworManagerContext";

export const useFeedback = () => {
  const { resetState, changeStep, fullSucceeded } = useContext(
    PasswordManagerContext
  );

  const result = fullSucceeded ? "SUCCESS" : "WARNING";
  const emogiName = EMOJI_NAME[result];
  const title = `step_3.${result}.title`;
  const text = `step_3.${result}.text`;
  const buttonText = `step_3.${result}.button`;
  const classError = !fullSucceeded ? "feedback-error" : "";

  const onClickButton = async () => {
    if (!fullSucceeded) {
      resetState();
    }
    changeStep(0);
  };

  return {
    result,
    emogiName,
    title,
    text,
    buttonText,
    classError,
    onClickButton,
  };
};
