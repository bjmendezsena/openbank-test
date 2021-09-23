import {
  FORM_VALIDATION_REGEX,
  NUM_MAX_CHARACTERS,
} from "../constants/constants";
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
  if (values.password2.length && values.password1 !== values.password2) {
    errors.password2 = getText("form_errors.password2");
  }

  if (values.pista.length > NUM_MAX_CHARACTERS) {
    errors.pista = getText("form_errors.pista");
  }

  if (
    errors.password1.length ||
    errors.password2.length ||
    errors.pista.length ||
    values.password1.length === 0 ||
    values.password2.length === 0
  ) {
    errors.disabled = true;
  }
  return errors;
}

const stepValidations = {
  0: (state) => {
    return true;
  },
  1: (state) => {
    const { acceptConditions } = state;
    if (!acceptConditions) return false;
    return true;
  },
  2: (state) => {
    const { formData = {} } = state;
    if (!formData) return false;
    const { passwordManager = "" } = formData;
    if (!passwordManager) return false;
    return true;
  },
};

export { formPasswordValidation, stepValidations };
