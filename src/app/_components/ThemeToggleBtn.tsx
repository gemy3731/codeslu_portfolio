"use client";

import { useTheme } from "next-themes";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
export default function ThemeToggleBtn() {
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div>
      <button
      className="flex items-center gap-1"
        onClick={() => {
          setTheme(currentTheme === "dark" ? "light" : "dark");
        }}
      >
        {currentTheme === "dark" ? <><CiLight className="text-[20px]" color="white" /></> :<><CiDark className="text-[20px]" color="black"/></>}
      </button>
    </div>
  );
}