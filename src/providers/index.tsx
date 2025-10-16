"use client";

import { ReactNode } from "react";
import AntdProvider from "./antd-provider";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <AntdProvider>
      {children}
    </AntdProvider>
  );
}