import "../globals.css";
import "../icons.css";

import LocaleParams from "@/types/locale";

import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { Inter } from "next/font/google";

interface LayoutProps {
  children: React.ReactNode;
  params: LocaleParams;
}

const inter = Inter({
  variable: "--font-inter",
  subsets: ["cyrillic", "cyrillic-ext"],
});

export const metadata: Metadata = {
  title: "HydroNRG",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
  },
};

export function generateStaticParams(): LocaleParams[] {
  return [{ locale: "ru" }, { locale: "kk" }, { locale: "en" }];
}

export default async function Layout({ children, params }: LayoutProps) {
  let messages;

  try {
    messages = (await import(`/locales/${params.locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={params.locale} className={inter.variable}>
      <body>
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
