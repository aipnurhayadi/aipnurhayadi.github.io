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
import { ReactElement, ReactNode } from "react";
import LocaleSwitcher from "@/components/common/LocaleSwitcher";
import { initTranslations } from "@/i18n";
import TranslationsProvider from "@/components/common/TranslationsProvider";

const firacode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "aipnur",
  description: "Selamat datang di situs web kami",
};

interface RootLayoutProps {
  children: ReactNode;
  params: {
    locale: string;
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>): Promise<ReactElement> {
  const i18nNamespaces = ["common", "misc"];
  const { t, resources } = await initTranslations({
    locale,
    namespaces: i18nNamespaces,
  });

  return (
    <html lang={locale}>
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
        <TranslationsProvider
          namespaces={i18nNamespaces}
          locale={locale}
          resources={resources}
        >
          <Navbar border rounded>
            <NavbarToggle />
            <NavbarBrand as={Link} href="/">
              <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                aipnur
              </span>
            </NavbarBrand>
            <div className="flex md:order-2">
              <DarkThemeToggle className="me-2" />
              <LocaleSwitcher />
            </div>

            <NavbarCollapse>
              <NavbarLink to="/" text={t("home")} />
              <NavbarLink to="/project" text={t("project")} />
              <NavbarLink to="/timeline" text={t("timeline")} />
            </NavbarCollapse>
          </Navbar>
          <div className="py-4">{children}</div>
        </TranslationsProvider>
      </body>
    </html>
  );
}
