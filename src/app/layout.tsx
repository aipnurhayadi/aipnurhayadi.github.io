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

const firacode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "aipnur.dev",
  description: "Selamat datang di situs web kami",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
        <Navbar border>
          <NavbarBrand as={Link} href="/">
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              aipnur.dev
            </span>
          </NavbarBrand>
          <NavbarToggle />
          <NavbarCollapse>
            <NavbarLink to="/" label="Beranda" />
            <NavbarLink to="/project" label="Proyek" />
            <NavbarLink to="/timeline" label="Lini Masa" />
          </NavbarCollapse>
          <div className="flex justify-between w-full md:w-auto mt-2 md:mt-0">
            <DarkThemeToggle className="me-2" />
            <Contact />
          </div>
        </Navbar>
        <div className="py-4">{children}</div>
      </body>
    </html>
  );
}
