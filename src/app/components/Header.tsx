"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <header className="bg-[#FBEBB5] relative">
        <div className="container mx-auto py-4 flex justify-between items-center">
          {/* Hamburger button for mobile */}
          <button
            type="button"
            className="lg:hidden block text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12" // Cross icon for close
                    : "M4 6h16M4 12h16m-7 6h7" // Hamburger icon for open
                }
              />
            </svg>
          </button>

          {/* Header Title */}
          <h1 className="text-2xl font-bold text-bg-yellow-100">.</h1>

          {/* Navigation for large screens */}
          <nav className="hidden lg:flex gap-4">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 font-bold hover:underline hover:scale-125"
            >
              Home
            </Link>
            <Link
              href="/Shop"
              className="text-gray-700 hover:text-blue-600 font-bold hover:underline hover:scale-125"
            >
              Shop
            </Link>
            <Link
              href="/Blog"
              className="text-gray-700 hover:text-blue-600 font-bold hover:underline hover:scale-125"
            >
              About
            </Link>
            <Link
              href="/Contact"
              className="text-gray-700 hover:text-blue-600 font-bold hover:underline hover:scale-125"
            >
              Contact
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex gap-4 pr-10">
            <Link href="/LoginAccount">
              <Image
                src="/icon1.png"
                alt="Login Account"
                width={30}
                height={20}
                className="hover:scale-125"
              />
            </Link>
            <Link
              href="https://www.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icon2.png"
                alt="Search"
                width={30}
                height={20}
                className="hover:scale-125"
              />
            </Link>
            <Link href="/SingleProduct">
              <Image
                src="/icon3.png"
                alt="Favorite"
                width={30}
                height={20}
                className="hover:scale-125"
              />
            </Link>
            <Link href="/Cart">
              <Image
                src="/icon4.png"
                alt="AddToBag"
                width={30}
                height={20}
                className="hover:scale-125"
              />
            </Link>
          </div>
        </div>

        {/* Navigation links for mobile */}
        {isMenuOpen && (
          <div className="absolute top-0 left-0 w-full bg-[#FBEBB5] z-50">
            <div className="container mx-auto py-4">
              <button
                type="button"
                className="block ml-auto mb-4 text-gray-700 focus:outline-none"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <nav className="flex flex-col gap-4">
                <Link
                  href="/"
                  className="text-gray-700 hover:text-blue-600 font-bold hover:underline hover:scale-125"
                >
                  Home
                </Link>
                <Link
                  href="/Shop"
                  className="text-gray-700 hover:text-blue-600 font-bold hover:underline hover:scale-125"
                >
                  Shop
                </Link>
                <Link
                  href="/Blog"
                  className="text-gray-700 hover:text-blue-600 font-bold hover:underline hover:scale-125"
                >
                  About
                </Link>
                <Link
                  href="/Contact"
                  className="text-gray-700 hover:text-blue-600 font-bold hover:underline hover:scale-125"
                >
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
