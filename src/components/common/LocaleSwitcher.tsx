"use client";

import { Button, Dropdown, DropdownItem } from "flowbite-react";
import { usePathname, useRouter } from "next/navigation";
import { ReactElement } from "react";
import { HiTranslate } from "react-icons/hi";
import { US, ID } from "country-flag-icons/react/3x2";
import { useTranslation } from "react-i18next";
import i18nConfig from "@/i18nConfig";

interface LocaleDropdownItemProps {
  locale: string;
  text: string;
  icon: ReactElement;
}

export function LocaleDropdownItem(
  props: LocaleDropdownItemProps
): ReactElement {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleClick = () => {
    const newLocale = props.locale;

    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    if (currentLocale === i18nConfig.defaultLocale) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };

  return (
    <DropdownItem onClick={() => handleClick()}>
      <span className="me-3">
        {currentLocale === props.locale ? <>&bull;</> : <>&nbsp;</>}
      </span>
      {props.icon}
      {props.text}
    </DropdownItem>
  );
}

export default function LocaleSwitcher(): ReactElement {
  return (
    <Dropdown
      label=""
      renderTrigger={() => (
        <Button color="grey">
          <HiTranslate className="w-5 h-5" />
        </Button>
      )}
      dismissOnClick={false}
    >
      <LocaleDropdownItem
        locale="id"
        icon={<ID className="h-5 me-3" />}
        text="Bahasa Indonesia"
      />
      <LocaleDropdownItem
        locale="en-US"
        icon={<US className="h-5 me-3" />}
        text="English"
      />
    </Dropdown>
  );
}
