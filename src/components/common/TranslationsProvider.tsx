"use client";

import { I18nextProvider } from "react-i18next";
import { createInstance } from "i18next";
import { initTranslations } from "@/i18n";
import { ReactNode } from "react";

interface TranslationsProviderProps {
  locale: string;
  namespaces: string[];
  resources?: any;
  children: ReactNode;
}

export default function TranslationsProvider({
  locale,
  namespaces,
  resources,
  children,
}: TranslationsProviderProps) {
  const i18n = createInstance();

  initTranslations({
    locale,
    namespaces,
    i18nInstance: i18n,
    resources,
  });

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
