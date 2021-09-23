import React from "react";
import { I18nextProvider } from "react-i18next";
import { Wizart } from "./components/molecules/wizart/Wizart";
import i18Config from "./locale";
import { PassworManagerProvider } from "./context/PassworManagerContext";

import "./OpenBankApp.scss";

export const OpenBankApp = () => {
  return (
    <I18nextProvider i18n={i18Config}>
      <PassworManagerProvider>
        <div className="OpenBankApp" >
          <Wizart />
        </div>
      </PassworManagerProvider>
    </I18nextProvider>
  );
};
