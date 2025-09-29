"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#products", label: "Products" },
    { href: "#manufacturing", label: "Manufacturing" },
    { href: "#quality", label: "Quality" },
    { href: "#partnerships", label: "Partnerships" },
    { href: "#advantages", label: "Advantages" },
    { href: "#growth", label: "Growth" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-dark-navy bg-opacity-95 backdrop-blur-md shadow-lg"
          : "bg-dark-navy shadow-md"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a
            href="#home"
            className="flex items-center font-montserrat font-bold text-xl text-white"
          >
            <Image
              src="/logo.png"
              alt="TOP ADVANCED Logo"
              width={80}
              height={80}
              className="mr-3"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            TMD
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-white hover:text-dark-navy-blue font-medium transition-colors duration-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-dark-navy-blue" />
            ) : (
              <Menu className="w-6 h-6 text-dark-navy" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <ul className="py-4 space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block px-4 py-2 text-dark-navy hover:text-primary-blue hover:bg-gray-50 transition-colors duration-300"
                    onClick={handleNavClick}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
