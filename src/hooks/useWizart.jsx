import { useContext, useEffect, useState } from "react";
import { PasswordManagerContext } from "../context/PassworManagerContext";

export const useWizart = () => {
  const {
    currentStep,
    totalSteps,
    formData,
    resetState,
    onSubmitPassword,
    fullSucceeded,
    loading,
  } = useContext(PasswordManagerContext);

  const [form, setForm] = useState({
    password1: "",
    password2: "",
    pista: "",
  });

  const resetForm = () => {
    setForm({
      password1: "",
      password2: "",
      pista: "",
    });
  };

  useEffect(() => {
    if (formData) {
      const { passwordManager = "", pista = "" } = formData;
      setForm({
        password1: passwordManager,
        password2: passwordManager,
        pista,
      });
    }
  }, [formData]);

  const onCancel = () => {
    resetState();
    resetForm();
  };

  const handleSubmit = (values = null) => {
    if (values) {
      resetForm();
      onSubmitPassword(values);
    }
  };

  const stepClassName = `wizart-content-step-${currentStep}`;
  const wizardHidden = currentStep === 2 ? "wizart-hidden" : "";
  return {
    onCancel,
    stepClassName,
    wizardHidden,
    handleSubmit,
    totalSteps,
    fullSucceeded,
    form,
    currentStep,
    loading,
  };
};
