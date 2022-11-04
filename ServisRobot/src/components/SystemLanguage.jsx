import { Suspense } from "react";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

const translationsEn = {
  language: "System Language:",
};

const translationsTr = {
  language: "Sistem Dili:",
};
i18n
.use(LanguageDetector)
.use(initReactI18next)
.init({
  resources: {
    en: { translation: translationsEn },
    tr: { translation: translationsTr },
  },
  debug: true,
   lng: localStorage.getItem("event.target.value") || "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});
const DETECTION_OPTIONS = {
  order: ['localStorage', 'navigator'],
  caches: ['localStorage']
};
const SystemLanguage = () => {
  const { t } = useTranslation();
  const onChange = (event) => {
    i18n.changeLanguage(event.target.value);
    localStorage.setItem('language',JSON.stringify(event.target.value))

  };
  const DETECTION_OPTIONS = {
  order: ['localStorage', 'navigator'],
  caches: ['localStorage']
};
  return (
    <Suspense fallback={"Loading..."}>
      <div className="language">
        <label className="label2">{t("language")}</label>
        <select className="select" onChange={onChange}>
          <option value="en">English</option>
          <option value="tr">Turkish</option>
        </select>
      </div>
    </Suspense>
  );
};

export default SystemLanguage;
