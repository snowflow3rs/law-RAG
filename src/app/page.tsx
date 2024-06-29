"use client";

import { Suspense } from "react";

import { Authenticated } from "@refinedev/core";
import { NavigateToResource } from "@refinedev/nextjs-router";
import SideBar from "@components/side-bar";
import MainPrompt from "@components/main-promt";

export default function IndexPage() {

  return (
    <Suspense>
      <Authenticated key="home-page">
        <NavigateToResource />
        <div className="   min-h-screen    bg-[#171717] flex ">
          <div className="  fixed z-2 top-0 left-0  h-full    ">
            <SideBar />
          </div>
          <div className="flex-1 ml-[260px] " >
            <MainPrompt />
          </div>
        </div>
      </Authenticated>
    </Suspense>

  );
}

