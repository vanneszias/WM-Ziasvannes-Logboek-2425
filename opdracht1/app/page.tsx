"use client";
import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";

import List from "./components/list/list";

export default function Home() {
  return (
    <NextUIProvider>
      <div className="flex justify-center items-center min-h-screen bg-slate-200">
        <div className="text-justify space-y-5 bg-slate-400 p-10 w-2/3 min-w-[450px] max-w-[800px] h-2/3 min-h-[400px] rounded-xl shadow-2xl">
          <h1 className="text-center p-4 text-slate-800">
            Opdracht 1 - API interface
          </h1>
          <List />
        </div>
      </div>
    </NextUIProvider>
  );
}
