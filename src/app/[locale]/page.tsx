import { useTranslations } from "next-intl";
import { ReactElement } from "react";

export default function Home(): ReactElement {
  const t = useTranslations();
  return (
    <div className="text-center">
      {t("misc.under_development", { page: t("common.home") })}
    </div>
  );
}
