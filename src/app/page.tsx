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
        <div className="  min-h-screen relative   bg-[#171717] flex ">
        <div className="  sticky z-2 top-0 left-0 max-h-screen flex flex-col w-[260px]   ">
        <SideBar/>
        </div>
          <MainPrompt />
        </div>
      </Authenticated>
    </Suspense>

  );
}

