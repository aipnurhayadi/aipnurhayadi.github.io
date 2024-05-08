"use client";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

export async function generateStaticParams() {
  return {};
}

export default function Project(): ReactElement {
  const { t } = useTranslation();

  return (
    <div className="text-center">
      {t("under_development", { page: t("timeline") })}
    </div>
  );
}
