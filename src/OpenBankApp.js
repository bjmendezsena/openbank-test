import React from "react";
import { I18nextProvider } from "react-i18next";
import i18Config from "./locale";
import Step1 from "./views/ProductInformation";

export const OpenBankApp = () => {
  
  return (
    <I18nextProvider i18n={i18Config}>
      <Step1 />
    </I18nextProvider>
  );
};
