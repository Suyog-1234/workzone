"use client";

import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="">
      <div className="w-[200px] h-[200px] bg-backgroundV2">
         landing
      </div>
      <div className="flex items-center gap-8">
        <button onClick={() => setTheme('light')}>Light Mode</button>
        <button onClick={() => setTheme('dark')}>Dark Mode</button>
      </div>
    </div>
  );
}
