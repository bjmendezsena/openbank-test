export const EMOJI_NAME = {
  BOX: "BOX",
  SUCCESS: "SUCCESS",
  HEAD: "HEAD",
  WARNING: "WARNING",
  CHECK: "CHECK",
  LOADING: "LOADING",
};
export const FORM_VALIDATION_REGEX = {
  STRENGTH_PASS: new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,24}$"),
};

export const initialState = {
  acceptConditions: false,
  formData: null,
  totalSteps: 3,
  currentStep: 0,
  fullSucceeded: false,
  obtainedSteps: [],
  loading: false,
};

export const NUM_MAX_CHARACTERS = 255;
