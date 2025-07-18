"use client";

import Link from "next/link";
import { Navbar } from "flowbite-react";
import ThemeToggleBtn from "./ThemeToggleBtn";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import logoImg from "../../../assets/logo.png"
import Image from "next/image";
import { orbitron } from "../Fonts";
export default function MyNavbar() {
  const [isOpened, setIsOpened] = useState(false);
  const [, setActiveSection] = useState<string>("home");
  const router = useRouter()
  const pathName = usePathname();
  useEffect(() => {
    const handleLinkClick = (event: Event) => {

      if (!pathName.includes("/project") && !pathName.includes("/blog") && !pathName.includes("/portfolio") && !pathName.includes("/eula") && !pathName.includes("/policy") && !pathName.includes("/tos")) {
        event.preventDefault();
        const target = event.currentTarget as HTMLAnchorElement;
        const targetId = target.innerText.toLowerCase().replace(" ", "");
        const targetElement = document.getElementById(targetId || "");

        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
          setActiveSection(targetId || "");
        }
      }else{
        router.push('/')
      }
    };

    const sections = document.querySelectorAll("section[id]");
    const links = document.querySelectorAll(".nav-links a");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            console.log(entry.target);
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active");
          }
        });
      },
      { root: null, rootMargin: "0px 0px -50% 0px", threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    links.forEach((link) => link.addEventListener("click", handleLinkClick));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      links.forEach((link) =>
        link.removeEventListener("click", handleLinkClick)
      );
    };
  }, [pathName,router]);
  return (
    <div>
      <Navbar
        rounded
        className="fixed top-0 left-0 right-0 z-50 shadow-md dark:shadow-lg dark:bg-[rgb(27,27,27)] py-4"
      >
        <Navbar.Brand as={Link} href="/">
          <Image
            src={logoImg}
            className="mr-3 w-[40px] h-[40px] rounded-full"
            alt="Codeslu Logo"
          />
          <span className={`self-center whitespace-nowrap text-xl font-semibold tracking-widest dark:text-white ${orbitron.className}`}>
            CodeSlu
          </span>
        </Navbar.Brand>
        <div
          onClick={() => {
            setIsOpened(!isOpened);
          }}
        >
          <Navbar.Toggle />
        </div>

        <Navbar.Collapse className="nav-links">
          <Navbar.Link href="/">Home</Navbar.Link>
          <Navbar.Link href="/">About</Navbar.Link>
          <Navbar.Link href="/">Portfolio</Navbar.Link>
          <Navbar.Link href="/">Success stories</Navbar.Link>
          <Navbar.Link href="/">Contact us</Navbar.Link>
          <ThemeToggleBtn isOpened={isOpened} />
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
