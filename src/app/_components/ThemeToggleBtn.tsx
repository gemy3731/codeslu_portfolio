"use client";

import { useTheme } from "next-themes";
import { CiDark } from "react-icons/ci";
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
        {currentTheme === "dark" ? <><CiDark className="text-[20px]" color="white" />Light Mode</> :<><CiDark className="text-[20px]" color="black"/>Dark Mode</>}
      </button>
    </div>
  );
}