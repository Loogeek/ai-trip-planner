import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <div className="flex justify-between items-center p-4">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image src="logo.svg" alt="Logo" width={40} height={40} />
        <h1 className="text-2xl font-bold">AI Trip Planner</h1>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 space-x-8 items-center">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-lg hover:scale-105 hover:text-primary transition"
          >
            {item.name}
          </Link>
        ))}
      </div>

            {/* Get Started */}
            {/* {!user ? (
        <SignInButton mode="modal">
          <Button>Get Started</Button>
        </SignInButton>
      ) : ( */}
        <Link href="/create-new-trip">
          <Button>Create New Trip</Button>
        </Link>
      {/* )} */}
    </div>
  );
}
