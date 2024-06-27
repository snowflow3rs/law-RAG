import { Layout as BaseLayout } from "@components/layout";
import ScrollToTopBtn from "@components/scroll-top-btn";
import React from "react";

export default async function Layout({ children }: React.PropsWithChildren) {
  return <BaseLayout>{children}
  <ScrollToTopBtn /></BaseLayout>;
}
