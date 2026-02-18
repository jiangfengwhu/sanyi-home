import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import zh from "./zh";
import en from "./en";

const translations = { zh, en };

const I18nContext = createContext(null);

function detectSystemLang() {
  if (typeof navigator === "undefined") return "zh";
  const browserLang = navigator.language || navigator.userLanguage || "";
  return browserLang.startsWith("zh") ? "zh" : "en";
}

export function I18nProvider({ children }) {
  const [lang, setLang] = useState("zh");

  useEffect(() => {
    setLang(detectSystemLang());
  }, []);

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
