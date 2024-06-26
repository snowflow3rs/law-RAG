import { DevtoolsProvider } from "@providers/devtools";
import { GitHubBanner, Refine } from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import routerProvider from "@refinedev/nextjs-router";
import { Metadata } from "next";
import React, { Suspense } from "react";

import { dataProvider } from "@providers/data-provider";
import "@styles/global.css";
import { ToastProvider } from "../../modal/toast-provider";
import ScrollToTopBtn from "@components/scroll-top-btn";
import TestSticky from "@components/test";

export const metadata: Metadata = {
  title: "Refine",
  description: "Generated by create refine app",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  return (
    <html lang="en">
      <body>
        <Suspense>
          <RefineKbarProvider>
            <Refine
              routerProvider={routerProvider}

              dataProvider={dataProvider}
              resources={[
                {

                  name: "upload",
                  list: "/upload",
                  // create: "/blog-posts/create",
                  // edit: "/blog-posts/edit/:id",
                  // show: "/blog-posts/show/:id",

                },
                {

                  name: "homepage",
                  list: "/",
                  // create: "/blog-posts/create",
                  // edit: "/blog-posts/edit/:id",
                  // show: "/blog-posts/show/:id",

                },

              ]}
              options={{
                syncWithLocation: true,
                warnWhenUnsavedChanges: true,
                useNewQueryKeys: true,
                projectId: "P2qOqG-wcVM3a-G258Rb",
              }}
            >

              <ToastProvider />
              <div className=" h-full  relative">

                {children}
              </div>

              <ScrollToTopBtn />
              <RefineKbar />
            </Refine>

          </RefineKbarProvider>

        </Suspense>
      </body>
    </html>
  );
}