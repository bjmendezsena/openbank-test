import React from "react";

import { getText } from "../../utils/utils";
import "./Form.scss";
import { OBInput } from "../../components/molecules/obInput/OBInput";
import { useFormik } from "formik";
import { formPasswordValidation } from "../../utils/validations";
import { OPButton } from "../../components/atoms/opbutton/OPButton";
import { NUM_MAX_CHARACTERS } from "../../constants/constants";

const Step2 = ({ handleSubmit, handleReset, values, onCancel, loading }) => {
  const disabled = loading || values.password1.length === 0;

  const formik = useFormik({
    initialValues: values || {
      password1: "",
      password2: "",
      pista: "",
    },
    initialErrors: {
      password1: "",
      password2: "",
      pista: "",
      disabled,
    },
    onSubmit: handleSubmit,
    onReset: handleReset,
    validate: formPasswordValidation,
  });

  const pistaFooter = `${getText("input_footers.pista").replace(
    "{ch}",
    NUM_MAX_CHARACTERS.toString()
  )} ${formik.values.pista.length}/${NUM_MAX_CHARACTERS}`;

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
              footer={getText("input_footers.password1")}
              name="password1"
              onChange={formik.handleChange}
              error={formik.touched.password1 && formik.errors.password1}
              onBlur={formik.handleBlur}
              value={formik.values.password1}
            />
          </div>
          <div className="step_2-main-form-field">
            <OBInput
              textLabel={getText("step_2.form.input_2")}
              type="password"
              onChange={formik.handleChange}
              name="password2"
              error={formik.touched.password2 && formik.errors.password2}
              onBlur={formik.handleBlur}
              value={formik.values.password2}
            />
          </div>
        </div>
        <div className="step_2-main-secret">
          <p>{getText("step_2.text_2")}</p>
          <OBInput
            textLabel={getText("step_2.input_secret")}
            infoIcon
            footer={pistaFooter}
            onChange={formik.handleChange}
            name="pista"
            error={formik.errors.pista}
            value={formik.values.pista}
          />
        </div>
        <div className="wizart-content-footer">
          <div className="wizart-content-footer-buttons">
            <OPButton onClick={onCancel} variant="light">
              {getText("wizard.btn_cancel")}
            </OPButton>
            <OPButton
              disabled={formik.errors.disabled}
              variant="secondary"
              withIcon
              onClick={() => handleSubmit(formik.values)}
            >
              {getText("wizard.btn_continue")}
            </OPButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2;
