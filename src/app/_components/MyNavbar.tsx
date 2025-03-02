"use client";

import Link from "next/link";
import { Navbar } from "flowbite-react";
import ThemeToggleBtn from "./ThemeToggleBtn";
import { useState } from "react";

export default function MyNavbar() {
  const [isOpened,setIsOpened] = useState(false);
  return (
  <div >
    <Navbar  rounded className="fixed top-0 left-0 right-0 z-50 shadow-md dark:shadow-lg">
      <Navbar.Brand as={Link} href="#">
        <img src="https://ca.slack-edge.com/T07P4ECQXU7-U07Q7QFRWV6-305fa1c24e22-512" className="mr-3 h-6 sm:h-9" alt="Codeslu Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">CodeSlu</span>
      </Navbar.Brand>
      <div onClick={()=>{setIsOpened(!isOpened)}}>
      <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} href="#">
          About
        </Navbar.Link>
        <Navbar.Link href="#">Portfolio</Navbar.Link>
        <Navbar.Link href="#">Forum</Navbar.Link>
        <Navbar.Link href="#">Contact us</Navbar.Link>
      </Navbar.Collapse>
      <ThemeToggleBtn isOpened={isOpened} />
    </Navbar>
    </div>
  );
}
