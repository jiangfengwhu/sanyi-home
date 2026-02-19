import { createContext, useContext, useState, useCallback } from "react";
import zh from "./zh";
import en from "./en";

const translations = { zh, en };

const I18nContext = createContext(null);

export function I18nProvider({ children, defaultLang = "zh" }) {
  const [lang, setLang] = useState(defaultLang);

  const t = useCallback(
    (key) => {
      const keys = key.split(".");
      let value = translations[lang];
      for (const k of keys) {
        if (value == null) return key;
        value = value[k];
      }
      return value ?? key;
    },
    [lang],
  );

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "zh" ? "en" : "zh"));
  }, []);

  return (
    <I18nContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
