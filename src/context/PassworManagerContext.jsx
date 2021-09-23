import React, { createContext, useReducer } from "react";
import { initialState } from "../constants/constants";
import { submitForm } from "../services/api";
import { stepValidations } from "../utils/validations";
import {
  acceptConditionsAction,
  changeValuesAction,
  changeStepAction,
  changeFullSucceededAction,
  resetStateAction,
  changeToNextStepAction,
  changeToPreviousStepAction,
  startLoading,
  stopLoading,
} from "./passwordManagerActions";
import { passwordManagerReducer } from "./passwordManagerReducer";

export const PasswordManagerContext = createContext();

export const PassworManagerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(passwordManagerReducer, initialState);

  const onAcceptConditions = () => {
    dispatch(acceptConditionsAction(true));
  };

  const onChangeValues = (data) => {
    dispatch(changeValuesAction(data));
  };

  const changeToNextStep = () => {
    const { currentStep, totalSteps } = state;
    const nextStep = currentStep + 1;
    if (nextStep < totalSteps) {
      dispatch(changeToNextStepAction(nextStep));
    }
  };

  const changeToPreviousStep = () => {
    const { currentStep } = state;
    const previousStep = currentStep - 1;
    if (previousStep >= 0) {
      dispatch(changeToPreviousStepAction(previousStep));
    }
  };

  const changeFullStepSucceeded = () => {
    dispatch(changeFullSucceededAction(2));
  };

  const resetState = () => {
    dispatch(resetStateAction());
  };

  const changeStep = (step) => {
    const isEnabled = checkStep(step);
    if (isEnabled) {
      dispatch(changeStepAction(step));
    }
  };

  const checkStep = (step) => {
    const { currentStep, totalSteps, obtainedSteps } = state;
    if (obtainedSteps.includes(step)) return true;
    if (step > totalSteps || step < 0 || step === currentStep) return false;

    const validation = stepValidations[step](state);

    return validation;
  };

  const onSubmitPassword = async (values) => {
    dispatch(startLoading());
    try {
      const { pista = "", password1 = "" } = values;
      const data = {
        passwordManager: password1,
        pista,
      };
      const result = await submitForm(data);
      if (result.status !== 200) {
        stopLoading();
        return changeToNextStep();
      }
      onChangeValues(data);
      changeFullStepSucceeded();
    } catch (error) {
      changeToNextStep();
    }
    dispatch(stopLoading());
  };
  return (
    <PasswordManagerContext.Provider
      value={{
        ...state,
        onAcceptConditions,
        onChangeValues,
        changeToNextStep,
        changeToPreviousStep,
        changeStep,
        changeFullStepSucceeded,
        resetState,
        onSubmitPassword,
      }}
    >
      {children}
    </PasswordManagerContext.Provider>
  );
};
