"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle Escape key and focus trap
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
        toggleRef.current?.focus();
      }

      if (e.key === "Tab" && isMenuOpen && menuRef.current) {
        const focusableElements = menuRef.current.querySelectorAll(
          'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    if (isMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    const main = document.querySelector("main");
    const footer = document.querySelector("footer");
    
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      main?.setAttribute("aria-hidden", "true");
      footer?.setAttribute("aria-hidden", "true");
    } else {
      document.body.style.overflow = "unset";
      main?.removeAttribute("aria-hidden");
      footer?.removeAttribute("aria-hidden");
    }
    return () => {
      document.body.style.overflow = "unset";
      main?.removeAttribute("aria-hidden");
      footer?.removeAttribute("aria-hidden");
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: "Experiences", href: "#experiences" },
    { name: "How It Works", href: "#how" },
    { name: "About", href: "#about" },
  ];

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#D4AF37] focus:text-black focus:px-4 focus:py-2 focus:rounded-sm focus:font-sans focus:font-medium focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
      >
        Skip to main content
      </a>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/60 backdrop-blur-md border-b border-white/10 py-3"
            : "bg-transparent py-6"
        }`}
      >
      <nav 
        className="mx-auto max-w-7xl px-6 md:px-8 flex items-center justify-between"
        aria-label="Main Navigation"
      >
        {/* Brand */}
        <Link 
          href="/" 
          className="font-serif text-2xl md:text-3xl text-white tracking-widest uppercase focus-visible:outline-2 focus-visible:outline-[#D4AF37] focus-visible:outline-offset-4 rounded-sm"
        >
          SYREN
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="font-sans text-sm text-white/90 hover:text-white transition-colors tracking-wide focus-visible:outline-2 focus-visible:outline-[#D4AF37] focus-visible:outline-offset-4 rounded-sm px-2 py-1"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Link
            href="https://wa.me/201000000000?text=I%20want%20to%20plan%20my%20trip%20to%20Egypt%20with%20Syren"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#D4AF37] hover:bg-[#C9A233] text-black px-6 py-2.5 rounded-sm font-sans text-sm font-medium transition-colors tracking-wide focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
          >
            Plan My Trip
          </Link>
        </div>

        {/* Mobile CTA & Hamburger */}
        <div className="flex items-center gap-4 md:hidden">
          <Link
            href="https://wa.me/201000000000?text=I%20want%20to%20plan%20my%20trip%20to%20Egypt%20with%20Syren"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#D4AF37] text-black px-4 py-2.5 rounded-sm font-sans text-xs font-medium tracking-wide focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
          >
            Plan My Trip
          </Link>
          
          <button
            ref={toggleRef}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            className="text-white p-2.5 z-50 relative focus-visible:outline-2 focus-visible:outline-[#D4AF37] focus-visible:outline-offset-2 rounded-sm min-w-[44px] min-h-[44px] flex items-center justify-center"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        ref={menuRef}
        className={`fixed inset-0 bg-[#0b0b0b] z-40 transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
      >
        <div className="flex flex-col items-center justify-center h-full px-6 space-y-12">
          <ul className="flex flex-col items-center space-y-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-serif text-3xl text-white tracking-wide hover:text-[#D4AF37] transition-colors focus-visible:outline-2 focus-visible:outline-[#D4AF37] focus-visible:outline-offset-8 rounded-sm p-4 min-w-[120px] text-center"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="https://wa.me/201000000000?text=I%20want%20to%20plan%20my%20trip%20to%20Egypt%20with%20Syren"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="bg-[#D4AF37] hover:bg-[#C9A233] text-black px-10 py-4 rounded-sm font-sans text-lg font-medium transition-colors tracking-wide shadow-xl focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4"
          >
            Plan My Trip
          </Link>
        </div>
      </div>
    </header>
    </>
  );
}
