import React, { Component } from "react";

import { getText } from "../../utils/utils";
import "./Form.scss";
import { OBInput } from "../../components/molecules/obInput/OBInput";
import { Formik } from "formik";
import { formPasswordValidation } from "../../utils/formValidation";
import { OPButton } from "../../components/atoms/opbutton/OPButton";

class Step2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(values) {
    console.log("On change: ", values);
  }

  handleSubmit(values) {
    console.log("On submit: ", values);
  }

  render() {
    return (
      <div className="step_2">
        <div className="step_2-main">
          <div className="step_2-main-description">
            <p>{getText("step_2.desc_1")}</p>
            <p>{getText("step_2.desc_2")}</p>
          </div>
          <Formik
            initialValues={{
              password1: "",
              password2: "",
              pista: "",
            }}
            initialErrors={{
              password1: "",
              password2: "",
              pista: "",
              disabled: true,
            }}
            onSubmit={this.handleSubmit}
            validate={formPasswordValidation.bind(this)}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <>
                <div className="step_2-main-form">
                  <div className="step_2-main-form-field">
                    <OBInput
                      textLabel={getText("step_2.form.input_1")}
                      type="password"
                      footer={getText("input_footers.password1")}
                      name="password1"
                      onChange={handleChange}
                      error={touched.password1 && errors.password1}
                      onBlur={handleBlur}
                      value={values.password1}
                    />
                  </div>
                  <div className="step_2-main-form-field">
                    <OBInput
                      textLabel={getText("step_2.form.input_2")}
                      type="password"
                      onChange={handleChange}
                      name="password2"
                      error={touched.password2 && errors.password2}
                      onBlur={handleBlur}
                      value={values.password2}
                    />
                  </div>
                </div>
                <div className="step_2-main-secret">
                  <p>{getText("step_2.text_2")}</p>
                  <OBInput
                    textLabel={getText("step_2.input_secret")}
                    infoIcon
                    footer={`${getText("input_footers.pista")} ${
                      values.pista.length
                    }/60`}
                    onChange={handleChange}
                    name="pista"
                    error={errors.pista}
                  />
                </div>
                <div className="wizart-content-footer">
                  <div className="wizart-content-footer-buttons">
                    <OPButton variant="light">
                      {getText("wizard.btn_cancel")}
                    </OPButton>
                    <OPButton
                      type="submit"
                      disabled={errors.disabled}
                      variant="secondary"
                      withIcon
                    >
                      {getText("wizard.btn_continue")}
                    </OPButton>
                  </div>
                </div>
              </>
            )}
          </Formik>
        </div>
      </div>
    );
  }
}

export default Step2;
