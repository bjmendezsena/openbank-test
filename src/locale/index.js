
import i18next from "i18next";
import global_es from './es.json';
const i18n = i18next;
i18n.init({
  interpolation: { escapeValue: false },
  lng:"es",
  resources:{
    es:{
      translation:global_es
    },
  }
});
export default i18n;
