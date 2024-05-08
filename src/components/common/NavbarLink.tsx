"use client";
import { usePathname } from "next/navigation";
import { NavbarLink as NavbarLinkFb } from "flowbite-react";
import { ReactElement } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";

export interface NavbarLinkProps {
  to: string;
  text: string;
}

export default function NavbarLink(props: NavbarLinkProps): ReactElement {
  const pathname = usePathname();
  const localeActive = useLocale();

  const destination =
    props.to == "/" ? `/${localeActive}` : `/${localeActive}${props.to}`;

  return (
    <NavbarLinkFb
      href={destination}
      as={Link}
      active={pathname === destination}
    >
      {props.text}
    </NavbarLinkFb>
  );
}
