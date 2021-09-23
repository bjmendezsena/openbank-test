import React from "react";
import { Emoji } from "../../components/atoms/emoji/Emoji";
import { OPButton } from "../../components/atoms/opbutton/OPButton";
import { getText } from "../../utils/utils";
import { useFeedback } from "../../hooks/useFeedback";
import "./Feedback.scss";

const Step3 = () => {
  const {
    emogiName,
    title,
    text,
    buttonText,
    classError,
    onClickButton,
  } = useFeedback();

  return (
    <div className={"feedback " + classError}>
      <div className="feedback-content">
        <div className="feedback-content-icon">
          <Emoji name={emogiName} />
        </div>
        <div className="feedback-content-text">
          <h1 className="feedback-content-text-title">{getText(title)}</h1>
          <span>{getText(text)}</span>
        </div>
      </div>
      <div className="feedback-footer">
        <OPButton size="large" onClick={onClickButton} withIcon variant="light">
          {getText(buttonText)}
        </OPButton>
      </div>
    </div>
  );
};

export default Step3;
