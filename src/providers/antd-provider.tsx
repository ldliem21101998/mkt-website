"use client";

import { StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider } from "antd";
import { ReactNode } from "react";

import antdTheme from "@/constants/antd-theme";

export default function AntdProvider({ children }: { children: ReactNode }) {
  return (
    <StyleProvider>
      <ConfigProvider theme={antdTheme}>
        {children}
      </ConfigProvider>
    </StyleProvider>
  );
}