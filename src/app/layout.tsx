"use client";

import TanstackProvider from "@/shared/providers/TanstackProvider";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import dayjs from "dayjs";
import "dayjs/locale/id";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import React from "react";
import "./globals.scss";
import { BaseLayout } from "@/shared/components/base-layout/BaseLayout.component";
import AuthLayout from "@/shared/components/auth-layout/AuthLayout.component";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

dayjs.locale("id");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  const isAuthPath = ["/signin", "/register"];

  const getTitlePage = (pathNameParam: string) => {
    const pathNameList = pathNameParam.split("/");
    const titlePage = pathNameList[1] === "" ? "Thread" : pathNameList[1];
    const replaceString = titlePage.replace("-", " ");
    return (
      replaceString.charAt(0).toUpperCase() +
      replaceString.slice(1) +
      " | Care Connect Admin"
    );
  };
  return (
    <ConfigProvider>
      <html lang="en" className={`${inter.variable}`}>
        <head>
          <title>{getTitlePage(pathName)}</title>
        </head>
        <body>
          <TanstackProvider>
            <AntdRegistry>
              {isAuthPath.includes(pathName) ? (
                <AuthLayout>{children}</AuthLayout>
              ) : (
                <BaseLayout>{children}</BaseLayout>
              )}
              <BaseLayout>{children}</BaseLayout>
            </AntdRegistry>
          </TanstackProvider>
        </body>
      </html>
    </ConfigProvider>
  );
}
