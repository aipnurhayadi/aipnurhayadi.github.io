"use client";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

export default function Timeline(): ReactElement {
  const { t } = useTranslation();

  return (
    <div className="text-center">
      {t("under_development", { page: t("timeline") })}
    </div>
  );
}
