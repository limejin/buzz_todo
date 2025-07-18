import type { PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";

export default function AppRegister({ children }: PropsWithChildren) {
  return <BrowserRouter>{children}</BrowserRouter>;
}
