import Image from "next/image";
import styles from "./page.module.css";
import ThemeToggleBtn from "./_components/ThemeToggleBtn";

export default function Home() {
  return (
    <>
      <div className="h-[100vh] w-full ">
        <ThemeToggleBtn />
      </div>
    </>
  );
}
