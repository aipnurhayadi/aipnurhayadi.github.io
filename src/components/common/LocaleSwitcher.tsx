"use client";

import { Button, Dropdown, DropdownItem } from "flowbite-react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { ReactElement, useTransition } from "react";
import { HiTranslate } from "react-icons/hi";
import { US, ID } from "country-flag-icons/react/3x2";

interface LocaleDropdownItemProps {
  locale: string;
  text: string;
  icon: ReactElement;
}

export function LocaleDropdownItem(
  props: LocaleDropdownItemProps
): ReactElement {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localeActive = useLocale();

  const handleClick = (nextLocale: string) => {
    startTransition(() => router.push(`/${nextLocale}`));
  };

  console.log(props.icon);

  return (
    <DropdownItem onClick={() => handleClick(props.locale)}>
      <span className="me-3">
        {localeActive === props.locale ? <>&bull;</> : <>&nbsp;</>}
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
        locale="en"
        icon={<US className="h-5 me-3" />}
        text="English"
      />
    </Dropdown>
  );
}
