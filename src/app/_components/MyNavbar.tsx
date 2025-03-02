"use client";

import Link from "next/link";
import { Navbar } from "flowbite-react";
import ThemeToggleBtn from "./ThemeToggleBtn";
import { useEffect, useState } from "react";

export default function MyNavbar() {
  const [isOpened,setIsOpened] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
let observer;
  useEffect(() => {
    const handleLinkClick = (event: Event) => {
      event.preventDefault();
      const target = event.currentTarget as HTMLAnchorElement;
      const targetId = target.getAttribute("href")?.substring(1);
      const targetElement = document.getElementById(targetId || "");

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
        setActiveSection(targetId || "");
      }
    };

    const sections = document.querySelectorAll("section[id]");
    const links = document.querySelectorAll("nav a");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            entry.target.classList.add("active");
          }else{
            entry.target.classList.remove("active");
          }
        });
      },
      {root: null, rootMargin: "0px 0px -50% 0px", threshold: 0.5}
    );

    sections.forEach((section) => observer.observe(section));
    links.forEach((link) => link.addEventListener("click", handleLinkClick));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      links.forEach((link) => link.removeEventListener("click", handleLinkClick));
    };
  }, []);
  return (
  <div >
    <Navbar  rounded className="fixed top-0 left-0 right-0 z-50 shadow-md dark:shadow-lg dark:bg-[rgb(27,27,27)] py-4">
      <Navbar.Brand as={Link} href="#home">
        <img src="https://ca.slack-edge.com/T07P4ECQXU7-U07Q7QFRWV6-305fa1c24e22-512" className="mr-3 h-6 sm:h-9" alt="Codeslu Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">CodeSlu</span>
      </Navbar.Brand>
      <div onClick={()=>{setIsOpened(!isOpened)}}>
      <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#home" active={activeSection === "home"}>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} href="#about" active={activeSection === "about"}>
          About
        </Navbar.Link>
        <Navbar.Link href="#portfolio" active={activeSection === "portfolio"}>Portfolio</Navbar.Link>
        <Navbar.Link href="#forum" active={activeSection === "forum"}>Forum</Navbar.Link>
        <Navbar.Link href="#contactUs" active={activeSection === "contactUs"}>Contact us</Navbar.Link>
      </Navbar.Collapse>
      <ThemeToggleBtn isOpened={isOpened} />
    </Navbar>
    </div>
  );
}
