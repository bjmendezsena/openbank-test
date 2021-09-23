import { initialState } from "../constants/constants";
import { passwordManagerTypes } from "./passwordManagerTypes";

export const passwordManagerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case passwordManagerTypes.ACCEPT_CONDITIONS:
      return {
        ...state,
        acceptConditions: payload,
      };
    case passwordManagerTypes.CHANGE_VALUES:
      return {
        ...state,
        formData: payload,
      };
    case passwordManagerTypes.CHANGE_STEP:
      return {
        ...state,
        currentStep: payload,
      };
    case passwordManagerTypes.CHANGE_FULL_STEP_SUCCEEDED:
      return {
        ...state,
        currentStep: payload,
        fullSucceeded: true,
        obtainedSteps: [...state.obtainedSteps, payload],
      };
    case passwordManagerTypes.CHANGE_TO_NEXT_STEP:
      return {
        ...state,
        currentStep: payload,
        obtainedSteps: [...state.obtainedSteps, state.currentStep],
      };
    case passwordManagerTypes.LOADING:
      return {
        ...state,
        loading: payload,
      };
    case passwordManagerTypes.CHANGE_TO_PREVIOUS_STEP:
      return {
        ...state,
        currentStep: payload,
        obtainedSteps: state.obtainedSteps.filter((step) => step !== payload),
      };
    case passwordManagerTypes.RESET_STATE:
      return initialState;
    default:
      return state;
  }
};
