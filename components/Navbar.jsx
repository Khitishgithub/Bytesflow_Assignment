"use client";
import { Button } from "@/components/ui/button";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { ImagePlus, Pickaxe, Telescope } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const { isSignedIn } = useUser();
  const path = usePathname();
  const pathsToExclude = ["/sign-in", "/sign-up"];

  const shouldExcludeHeader = pathsToExclude.some((excludedPath) =>
    path.includes(excludedPath)
  );

  if (shouldExcludeHeader) {
    return;
  }

  const navLinks = [
    { title: "Explore", href: "/explore", logo: Telescope },
    { title: "My Creation", href: "/my-creation", logo: Pickaxe },
    { title: "Create", href: "/create", logo: ImagePlus },
  ];

  return (
    <div className="border-b shadow-sm fixed top-0 z-50 bg-opacity-80 backdrop-filter backdrop-blur-md w-full px-4 sm:px-8 py-3 lg:px-20">
      <div className="flex items-center justify-between">
        <Link href={"/"} className="flex items-center gap-2 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            id="logo"
          >
            <path d="M20.5 18.5c-.9 0-1.6-.7-1.6-1.6V8L12 4 5.1 8v8.9c0 .9-.7 1.6-1.6 1.6-.9 0-1.6-.7-1.6-1.6V6.5c0-.2.1-.4.3-.5L11.8.5c.2-.1.3-.1.5 0L21.8 6c.2.1.2.3.2.4v10.4c.1 1-.7 1.7-1.5 1.7zM12 3c.1 0 .2 0 .2.1l7.4 4.3c.2.1.3.3.3.4V17c0 .3.3.6.6.6s.6-.3.6-.6V6.8l-9-5.2-9.2 5.2v10.1c0 .3.3.6.6.6s.6-.3.6-.6V7.7c0-.2.1-.3.3-.4L11.8 3h.2z"></path>
            <path d="M12 23.5c-.1 0-.2 0-.2-.1l-4.7-2.7c-.2-.1-.2-.3-.2-.4V9.7c0-.2.1-.3.2-.4L9.2 8c.2-.1.3-.1.5 0s.3.3.3.4v10.4l2 1.2 2-1.2V8.4c0-.2.1-.3.3-.4.2-.1.3-.1.5 0l2.1 1.2c.2.1.2.3.2.4v10.6c0 .2-.1.3-.2.4l-4.7 2.7c0 .2-.1.2-.2.2zM7.8 20l4.2 2.4 4.2-2.4V10L15 9.3v9.8c0 .2-.1.3-.3.4L12.3 21c-.2.1-.3.1-.5 0l-2.5-1.5c-.2-.1-.3-.2-.3-.4V9.3l-1.2.7v10z"></path>
          </svg>
        </Link>
        {isSignedIn ? (
          <div className="flex items-center gap-x-2 sm:gap-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className={
                  path === link.href
                    ? "text-white text-sm rounded-md bg-black p-2"
                    : "text-white text-sm rounded-md hover:bg-cyan-600 p-2"
                }
              >
                <div className="flex items-center gap-2">
                  <link.logo size={20} />
                  <span className="hidden sm:block">{link.title}</span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex items-center gap-x-2">
            <SignInButton>
              <Button variant="secondary">Login</Button>
            </SignInButton>
            <Link href={"/create"}>
              <Button className="hidden sm:block">Get Started</Button>
            </Link>
          </div>
        )}
        {isSignedIn && <UserButton />}
      </div>
    </div>
  );
};

export default Navbar;
