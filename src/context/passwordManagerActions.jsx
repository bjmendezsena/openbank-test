import { passwordManagerTypes } from "./passwordManagerTypes";

export const acceptConditionsAction = (value) => ({
  type: passwordManagerTypes.ACCEPT_CONDITIONS,
  payload: value,
});
export const changeValuesAction = (values) => ({
  type: passwordManagerTypes.CHANGE_VALUES,
  payload: values,
});

export const changeStepAction = (value) => ({
  type: passwordManagerTypes.CHANGE_STEP,
  payload: value,
});
export const changeToNextStepAction = (value) => ({
  type: passwordManagerTypes.CHANGE_TO_NEXT_STEP,
  payload: value,
});
export const changeToPreviousStepAction = (value) => ({
  type: passwordManagerTypes.CHANGE_TO_PREVIOUS_STEP,
  payload: value,
});
export const changeFullSucceededAction = (value) => ({
  type: passwordManagerTypes.CHANGE_FULL_STEP_SUCCEEDED,
  payload: value,
});

export const resetStateAction = () => ({
  type: passwordManagerTypes.RESET_STATE,
});


export const startLoading = () => ({
  type: passwordManagerTypes.LOADING,
  payload:true,
});

export const stopLoading = () => ({
  type: passwordManagerTypes.LOADING,
  payload:false,
});

