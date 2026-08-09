"use client";

import { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";

// Reusable data-shape means adding/removing a nav item is a one-line change
// here rather than touching desktop AND mobile markup separately.
const navItems = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur border-b border-navy/10">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-content items-center justify-between px-6 py-4 md:px-10"
      >
        <Link
           href="/"
           className="flex items-center gap-2 text-lg font-bold tracking-tight text-navy rounded-sm"
       >
           <svg width="36" height="36" viewBox="0 0 40 40" fill="none" aria-hidden="true" className="shrink-0">
             <circle cx="20" cy="20" r="20" fill="#CEF600" />
             <path d="M12.5515 27.9611C11.6103 27.9611 10.7394 27.7784 9.93862 27.4132C9.15193 27.048 8.50573 26.5212 8 25.8328L9.55932 23.9574C9.96671 24.5193 10.4092 24.9408 10.8869 25.2217C11.3785 25.5027 11.9124 25.6432 12.4883 25.6432C14.0195 25.6432 14.7852 24.7371 14.7852 22.9249V15.2968H9.53825V13H17.5245V22.7774C17.5245 24.5193 17.096 25.8188 16.2391 26.6757C15.3962 27.5326 14.1671 27.9611 12.5515 27.9611Z" fill="#201F51" />
             <path d="M14.792 27.6063V13H17.4718L23.5616 23.7678H22.3816L28.7242 13H30.9789L31 27.7503H28.4082L28.3871 17.0669H28.935L23.5405 26.0646H22.3184L16.8397 17.0669H17.4718L16.8344 25.7749L14.792 27.6063Z" fill="#201F51" />
           </svg>
           Jumana Motorwala
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex md:items-center md:gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <NavLink href={item.href}>{item.label}</NavLink>
            </li>
          ))}
          <li>
            <NavLink
               href="/Jumana_Product_Designer.pdf"
               target="_blank"
               rel="noopener noreferrer"
               emphasized
             >
              Resume
             </NavLink>
           </li>
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 md:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            {isMenuOpen ? (
              <path
                d="M6 6l12 12M18 6l-12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile nav panel */}
      {isMenuOpen && (
        <ul
          id="mobile-menu"
          className="flex flex-col gap-1 border-t border-navy/10 px-6 pb-6 pt-2 md:hidden"
        >
          {navItems.map((item) => (
            <li key={item.href}>
              <NavLink href={item.href}>{item.label}</NavLink>
            </li>
          ))}
          <li className="mt-2">
            <NavLink
              href="/Jumana_Product_Designer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              emphasized
            >
              Resume
            </NavLink>
          </li>
        </ul>
      )}
    </header>
  );
}
