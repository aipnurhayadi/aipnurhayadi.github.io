import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

import classNames from "classnames";
import {
  DarkThemeToggle,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
  ThemeModeScript,
} from "flowbite-react";
import Link from "next/link";
import NavbarLink from "@/components/common/NavbarLink";
import Contact from "@/components/form/Contact";
import { ReactElement } from "react";

const firacode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "aipnur.dev",
  description: "Selamat datang di situs web kami",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): ReactElement {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>
      <body
        className={classNames({
          [firacode.className]: true,
          antialiased: true,
          "bg-white": true,
          "text-gray-600": true,
          "dark:bg-gray-900": true,
          "dark:text-gray-400": true,
        })}
      >
        <Navbar border rounded>
          <NavbarBrand as={Link} href="/">
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              aipnur.dev
            </span>
          </NavbarBrand>
          <div className="flex justify-between order-0 md:order-1">
            <DarkThemeToggle />
            <Contact />
          </div>
          <NavbarToggle />
          <NavbarCollapse>
            <NavbarLink to="/" label="Beranda" />
            <NavbarLink to="/project" label="Proyek" />
            <NavbarLink to="/timeline" label="Lini Masa" />
          </NavbarCollapse>
        </Navbar>
        <div className="py-4">{children}</div>
      </body>
    </html>
  );
}
