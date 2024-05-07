"use client";
import { usePathname } from "next/navigation";
import { NavbarLink as NavbarLinkFb } from "flowbite-react";

export interface NavbarLinkProps {
  to: string;
  label: string;
}

export default function NavbarLink(props: NavbarLinkProps) {
  const pathname = usePathname();

  return (
    <NavbarLinkFb href={props.to} active={pathname === props.to}>
      {props.label}
    </NavbarLinkFb>
  );
}
