import React, { Component } from "react";

import step from "./step1.png";
import { getText } from "../../utils/utils";
import { Icon } from "../../components/atoms/icon/Icon";
import { ICON_NAME } from "../../constants/constants";

class Step1 extends Component {
  render() {
    return (
      <div  >
        <Icon name={ICON_NAME.ARROW_RIGHT} />
        <h1>{getText("header.msg")}</h1>
        {/* <img src={step} /> */}
      </div>
    );
  }
}

export default Step1;
