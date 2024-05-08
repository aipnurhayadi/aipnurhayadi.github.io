"use client";
import { usePathname } from "next/navigation";
import { NavbarLink as NavbarLinkFb } from "flowbite-react";
import { ReactElement } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export interface NavbarLinkProps {
  to: string;
  text: string;
}

export default function NavbarLink(props: NavbarLinkProps): ReactElement {
  const pathname = usePathname();
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;

  const newPathname =
    props.to == "/" ? `/${currentLocale}` : `/${currentLocale}${props.to}`;

  return (
    <NavbarLinkFb
      href={newPathname}
      as={Link}
      active={pathname === newPathname}
    >
      {props.text}
    </NavbarLinkFb>
  );
}
