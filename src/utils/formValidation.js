import { FORM_VALIDATION_REGEX } from "../constants/constants";
import { getText } from "./utils";

function formPasswordValidation(values) {
  let errors = {
    password1: "",
    password2: "",
    pista: "",
    disabled: false,
  };
  if (!FORM_VALIDATION_REGEX.STRENGTH_PASS.test(values.password1)) {
    errors.password1 = getText("form_errors.password1");
  }
  if (values.password2.length && values.password1 != values.password2) {
    errors.password2 = getText("form_errors.password2");
  }

  if (values.pista.length > 60) {
    errors.pista = getText("form_errors.pista");
  }

  if (
    errors.password1.length ||
    errors.password2.length ||
    errors.pista.length ||
    values.password1.length == 0 ||
    values.password2.length == 0
  ) {
    errors.disabled = true;
  }
  return errors;
}

export { formPasswordValidation };
