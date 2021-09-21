import React from "react";
import { I18nextProvider } from "react-i18next";
import { Wizart } from "./components/molecules/wizart/Wizart";
import i18Config from "./locale";
import Step1 from "./views/ProductInformation";
import Step3 from "./views/Feedback";
import Step2 from "./views/Form";

export const OpenBankApp = () => {
  return (
    <I18nextProvider i18n={i18Config}>
      <Wizart currentStep={1} fullSucceeded={false} >
        <Step1 />
      </Wizart>
    </I18nextProvider>
  );
};
