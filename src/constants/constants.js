export const EMOJI_NAME = {
  BOX: "BOX",
  SUCCESS: "SUCCESS",
  HEAD: "HEAD",
  WARNING: "WARNING",
  CHECK: "CHECK",
};
export const FORM_VALIDATION_REGEX = {
  STRENGTH_PASS: new RegExp(
    "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,24}$"
  ),
};
