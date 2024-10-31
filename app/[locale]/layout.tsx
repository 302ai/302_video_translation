import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "../globals.css";
import { ErrorHandler } from "@/components/error-handler";
import { type LogLevel, LoggerProvider } from "@/util/logger";
import type { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="min-h-screen bg-[#f5f5f5] min-w-full h-full">
        <NextIntlClientProvider messages={messages}>
          <Toaster />
          <ErrorHandler />
          <LoggerProvider initialLevel={process.env.LOG_LEVEL as LogLevel}>
            {children}
          </LoggerProvider>
        </NextIntlClientProvider>
        <script src="https://assets.salesmartly.com/js/project_177_61_1649762323.js" />
      </body>
    </html>
  );
}
