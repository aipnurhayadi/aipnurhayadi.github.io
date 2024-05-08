"use client";

import { Button, Dropdown, DropdownItem } from "flowbite-react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { ReactElement, useTransition } from "react";
import { HiTranslate } from "react-icons/hi";

interface LocaleDropdownItemProps {
  locale: string;
  text: string;
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

  return (
    <DropdownItem onClick={() => handleClick(props.locale)}>
      {localeActive === props.locale && <span className="me-3">&bull;</span>}
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
      <LocaleDropdownItem locale="id" text="Bahasa Indonesia" />
      <LocaleDropdownItem locale="en" text="English" />
    </Dropdown>
  );
}
