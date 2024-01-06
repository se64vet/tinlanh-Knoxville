"use client";
import React, { createContext, useState } from "react";
import vi from "@/data/vi.json";
import en from "@/data/en.json";

export enum langOptions {
  vi = "vi",
  en = "en",
}
export const langContext = createContext({
  language: langOptions.vi,
  content: vi,
  setLanguage: () => {},
});

const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState(langOptions.vi);
  const [content, setContent] = useState(vi);
  function handleLangChange() {
    if (lang === langOptions.vi) {
      setLang(langOptions.en);
      setContent(en);
    } else {
      setLang(langOptions.vi);
      setContent(vi);
    }
  }

  return (
    <langContext.Provider
      value={{ language: lang, content, setLanguage: handleLangChange }}
    >
      {children}
    </langContext.Provider>
  );
};

export default LanguageProvider;
