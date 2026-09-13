import { useState } from "react";
import logo from "../assets/logo-text.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <div className="grid grid-cols-3 items-center">

          {/* Mobile Menu Button */}
          <div className="md:hidden flex justify-start">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 text-xl cursor-pointer hover:text-pink-600 transition"
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>

          {/* Logo */}
          <div className="flex md:justify-start justify-center">
            <img
              src={logo}
              alt="Dev Stack"
              className="h-7 sm:h-8 object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center gap-5 lg:gap-8 text-sm font-medium">
            <a
              href="#"
              className="text-gray-900 hover:text-pink-600 transition"
            >
              Home
            </a>

            <a
              href="#"
              className="text-gray-900 hover:text-pink-600 transition"
            >
              Technologies
            </a>

            <a
              href="#"
              className="text-gray-900 hover:text-pink-600 transition"
            >
              Projects
            </a>

            <a
              href="#"
              className="text-gray-900 hover:text-pink-600 transition"
            >
              About
            </a>

            <a
              href="#"
              className="text-gray-900 hover:text-pink-600 transition"
            >
              Contact
            </a>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center justify-end gap-3">
            <button
              className="text-sm font-medium text-gray-700 px-4 py-2 rounded-full cursor-pointer hover-brand-gradient hover:text-white hover:scale-105 transition-all duration-200"
            >
              Sign In
            </button>

            <button
              className="bg-brand-gradient text-white text-sm font-medium px-5 py-2 rounded-full cursor-pointer hover:opacity-90 hover:scale-105 transition-all duration-200"
            >
              Sign Up
            </button>
          </div>

          {/* Mobile Auth Buttons */}
          <div className="md:hidden flex items-center justify-end gap-2">
            <button
              className="text-xs sm:text-sm font-medium text-gray-700 px-3 py-1.5 rounded-full cursor-pointer hover-brand-gradient hover:text-white hover:scale-105 transition-all duration-200"
            >
              Sign In
            </button>

            <button
              className="bg-brand-gradient text-white text-xs sm:text-sm font-medium px-3 sm:px-4 py-1.5 rounded-full cursor-pointer hover:opacity-90 hover:scale-105 transition-all duration-200"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-3 px-4 sm:px-6 pb-4 text-sm font-medium">
          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="text-gray-900 hover:text-pink-600 transition"
          >
            Home
          </a>

          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="text-gray-900 hover:text-pink-600 transition"
          >
            Technologies
          </a>

          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="text-gray-900 hover:text-pink-600 transition"
          >
            Projects
          </a>

          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="text-gray-900 hover:text-pink-600 transition"
          >
            About
          </a>

          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="text-gray-900 hover:text-pink-600 transition"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;