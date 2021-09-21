import React, { Component } from "react";

import { getText } from "../../utils/utils";
import { OBHeader } from "../../components/atoms/header/OBHeader";
import "./Form.scss";
import { OBInput } from "../../components/molecules/obInput/OBInput";
import { OPButton } from "../../components/atoms/opbutton/OPButton";

class Step2 extends Component {


  render() {
    return (
      <div className="step_2">
        <div className="step_2-main">
          <div className="step_2-main-description">
            <p>{getText("step_2.desc_1")}</p>
            <p>{getText("step_2.desc_2")}</p>
          </div>
          <div className="step_2-main-form">
            <div className="step_2-main-form-field">
              <OBInput
                textLabel={getText("step_2.form.input_1")}
                type="password"
                footer="Min 8 - Max 24 caracteres)(Al menos 1 número y una mayúscula"
              />
            </div>
            <div className="step_2-main-form-field">
              <OBInput
                textLabel={getText("step_2.form.input_2")}
                type="password"
                
              />
            </div>
          </div>
          <div className="step_2-main-secret">
            <p>{getText("step_2.text_2")}</p>
            <OBInput
              textLabel={getText("step_2.input_secret")}
              infoIcon
              footer="(Maximo 255 caracteres) 0/60"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Step2;
