import React, { Component } from "react";

import step from "./step1.png";
import { getText } from "../../utils/utils";
import { OBHeader } from "../../components/atoms/header/OBHeader";
import "./ProductInformation.scss";
import { OBInput } from "../../components/molecules/obInput/OBInput";
import { CardEmojiInfo } from "../../components/molecules/cardEmojiInfo/CardEmojiInfo";
import { EMOJI_NAME } from "../../constants/constants";
class Step1 extends Component {
  render() {
    return (
      <div className="step_1">
        <div className="step_1-grid_cards">
          <div className="step_1-grid_cards-card">
            <CardEmojiInfo
              emojiName={EMOJI_NAME.HEAD}
              textBody={getText("step_1.card_1")}
            />
          </div>
          <div className="step_1-grid_cards-card">
            <CardEmojiInfo
              emojiName={EMOJI_NAME.BOX}
              textBody={getText("step_1.card_2")}
            />
          </div>
        </div>
        <div className="step_1-description_container">
          <div className="step_1-description_container-description">
            <h4 className="step_1-description_container-description-header">
              {getText("step_1.subtitle_1")}
            </h4>
            <p className="step_1-description_container-description-body">
              {getText("step_1.desc_1")}
            </p>
          </div>
          <div className="step_1-description_container-description">
            <h4 className="step_1-description_container-description-header">
              {getText("step_1.subtitle_2")}
            </h4>
            <p className="step_1-description_container-description-body">
              {getText("step_1.desc_2")}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Step1;
